<?php
require_once('function.php');
$errors = [];
const USER_BASE_FILE = '.htpasswd';

function valid_form()
{
  $errors = [];

  if (!isset($_POST['name']) || $_POST['name'] === "") {
    $errors['name'] = 'Заполните имя';
  } else {
    $lines = file('.htpasswd');
    foreach ($lines as $line) {
      $info = explode(":", $line);
      if ($info[0] === $_POST['name']) {
        $errors['name'] = 'Такое имя уже занято';
      };
    }
  };
  if (!isset($_POST['phone']) || $_POST['phone'] === "" || valid_phone($_POST['phone']) == FALSE) {
    $errors['phone'] = 'Заполните телефон';
  } else {
    if (is_numeric(loginPhone($_POST['phone'])) == TRUE){
      $errors['phone'] = 'Такой телефон уже занят';
    };
  };
  if (!isset($_POST['email']) || $_POST['email'] === "" || valid_email($_POST['email']) == FALSE) {
    $errors['email'] = 'Заполните почту';
  } else {
    if (is_numeric(loginEmail($_POST['email'])) == TRUE){
      $errors['email'] = 'Такая почта уже занята';
    };
  };
  if (!isset($_POST['pas']) || $_POST['pas'] === "") {
    $errors['pas'] = 'Заполните пароль';
  };
  if (!isset($_POST['pas2']) || $_POST['pas2'] === "") {
    $errors['pas2'] = 'Повторите пароль';
  };
  if ($_POST['pas'] !== $_POST['pas2']) {
    $errors['pas'] = 'Пароли не совпадают';
  };
  return $errors;
};

if (isset($_POST['submit'])) {
  $errors = valid_form();
  if (count($errors) === 0) {
    create_user($_POST['name'], $_POST['phone'], $_POST['email'], $_POST['pas']);
    http_response_code(301);
    header('Location: ./index.php');
    exit();
  };
}
?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <title>Регистрация пользователя</title>
  <link rel="icon" href="favicon.ico">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="index.css">
</head>

<body>
  <form class="form" action="registration.php" method="post">
    <h3>Регистрация пользователя</h3>
    <div class="form_border">
      <div class="logIn">
        <label name="name" class="logInLabel">Имя</label>
        <?= isset($errors['name']) ? "<div class='errors'>" . $errors['name'] . "</div>" : "" ?>
        <input type="text" name="name" class="logInInput" placeholder="Имя" value="<?= isset($_POST['name']) ? ($_POST['name']) : "" ?>" require>
      </div>
      <div class="logIn">
        <label name="phone" class="logInLabel">Телефон</label>
        <?= isset($errors['phone']) ? "<div class='errors'>" . $errors['phone'] . "</div>" : "" ?>
        <input type="tel" name="phone" class="logInInput" placeholder="8000123456" value="<?= isset($_POST['phone']) ? ($_POST['phone']) : "" ?>" require>
      </div>
      <div class="logIn">
        <label name="email" class="logInLabel">Эл. почта</label>
        <?= isset($errors['email']) ? "<div class='errors'>" . $errors['email'] . "</div>" : "" ?>
        <input type="email" name="email" class="logInInput" placeholder="email@email.ru" value="<?= isset($_POST['email']) ? ($_POST['email']) : "" ?>" require>
      </div>
      <div class="logIn">
        <label name="pas" class="logInLabel">Пароль</label>
        <?= isset($errors['pas']) ? "<div class='errors'>" . $errors['pas'] . "</div>" : "" ?>
        <input type="password" name="pas" class="logInInput" placeholder="******" require>
      </div>
      <div class="logIn">
        <label name="pas2" class="logInLabel">Повторить пароль</label>
        <?= isset($errors['pas2']) ? "<div class='errors'>" . $errors['pas2'] . "</div>" : "" ?>
        <input type="password" name="pas2" class="logInInput" placeholder="******" require>
      </div>
      <div class="logIn">
        <button type="submit" class="logInInput" name="submit">Регистрация</button>
      </div>
      <div class="logIn">
        <a href="/index.php">Авторизация пользователя</a>
      </div>
    </div>
  </form>
</body>

</html>