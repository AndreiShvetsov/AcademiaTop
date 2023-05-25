<?php
define('SMARTCAPTCHA_SERVER_KEY', 'ysc2_fJNi5Uwc7pY97ylKr0DhPXLEjtffwJ3b4vSOIFLSe8640daa');

function check_captcha($token)
{
  $ch = curl_init();
  $args = http_build_query([
    "secret" => SMARTCAPTCHA_SERVER_KEY,
    "token" => $token,
    "ip" => $_SERVER['REMOTE_ADDR'], // Нужно передать IP пользователя.
    // Как правильно получить IP зависит от вашего прокси.
  ]);
  curl_setopt($ch, CURLOPT_URL, "https://captcha-api.yandex.ru/validate?$args");
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_TIMEOUT, 1);

  $server_output = curl_exec($ch);
  $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);

  if ($httpcode !== 200) {
    echo "Allow access due to an error: code=$httpcode; message=$server_output\n";
    return true;
  }
  $resp = json_decode($server_output);
  return $resp->status === "ok";
}
require_once('function.php');
if (isset($_COOKIE['name'])) {
  header('Location: ./personalPage.php');
};

$is = null;
function valid_form()
{
  global $is;
  $errors = [];
  if (!isset($_POST['name']) || $_POST['name'] === "") {
    $errors['name'] = 'Заполните телефон или email';
  } else {
    if (valid_phone($_POST['name']) == TRUE) {
      $i = loginPhone($_POST['name']);
    } else {
      if (valid_email($_POST['name']) == TRUE) {
        $i = loginEmail($_POST['name']);
      } else {
        $errors['name'] = 'Пользователь не найден';
      }
    }
  };

  if (!isset($_POST['pas']) || $_POST['pas'] === "") {
    $errors['pas'] = 'Заполните пароль';
  };

  if (count($errors) === 0) {
    $is = $i;
  } else {
    return $errors;
  }
};
$token = $_POST['smart-token'];
if (check_captcha($token)) {
  if (isset($_POST['submit'])) {
    global $is;
    $errors = valid_form();
    if (count($errors) === 0) {
      $lines = file('.htpasswd');
      $info = explode(":", $lines[$is]);
      $pas =  rtrim($info[3]);
      if (password_verify($_POST['pas'], $pas)) {
        authorization($is);
      } else {
        $errors['pas'] = 'Пароль не правильный';
      };
    };
  }
};
?>
<!DOCTYPE html>
<html lang="ru">

<head>
  <title>Авторизация</title>
  <link rel="icon" href="favicon.ico">
  <script src="https://captcha-api.yandex.ru/captcha.js" defer></script>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="index.css">
</head>

<body>
  <form class="form" action="index.php" method="post">
    <h3>Авторизация пользователя</h3>
    <div class="form_border">
      <div class="logIn">
        <label name="name" class="logInLabel">Телефон или email</label>
        <?= isset($errors['name']) ? "<div class='errors'>" . $errors['name'] . "</div>" : "" ?>
        <input type="text" name="name" class="logInInput" placeholder="Телефон или email" value="<?= isset($_POST['name']) ? ($_POST['name']) : "" ?>">
      </div>
      <div class="logIn">
        <label name="pas" class="logInLabel">Пароль</label>
        <?= isset($errors['pas']) ? "<div class='errors'>" . $errors['pas'] . "</div>" : "" ?>
        <input type="password" name="pas" class="logInInput" placeholder="******">
      </div>
      <div class="logIn">
        <button type="submit" name="submit" class="logInInput">Войти</button>
      </div>
      <div class="logIn">
        <a href="/registration.php">Регистрация пользователя</a>
      </div>
    </div>
    <div style="height: 100px" id="captcha-container" class="smart-captcha" data-sitekey="ysc1_fJNi5Uwc7pY97ylKr0Dh7xNCHtXmrUvzcD3yNYlda658b050"></div>
  </form>
</body>

</html>