<?php
require_once('function.php');

if (isset($_POST['exit'])) {
  TheEnd();
};
if (isset($_COOKIE['name'])) {
  $lines = file('.htpasswd');
  $info = explode(":", $lines[$_COOKIE['name']]);
  $name = $info[0];
  $phone = $info[1];
  $email = $info[2];
  $pas = $info[3];
} else {
  header('Location: ./index.php');
};
function valid_form()
{
  $errors = [];
  if (!isset($_POST['name']) || $_POST['name'] === "") {
    $errors['name'] = 'Заполните имя';
  };
  if (!isset($_POST['phone']) || $_POST['phone'] === "" || valid_phone($_POST['phone']) == FALSE) {
    $errors['phone'] = 'Заполните телефон';
  };
  if (!isset($_POST['email']) || $_POST['email'] === "" || valid_email($_POST['email']) == FALSE) {
    $errors['email'] = 'Заполните почту';
  };
};

if (isset($_POST['log'])) {
  $errors = valid_form();
  if (count($errors) === 0) {
    new_base($_COOKIE['name'], $pas);
    header('Location: ./index.php');
    data_replacement();
    $lines = file('.htpasswd');
    $IdNum = count($lines) - 1;
    setcookie("name", "$IdNum");
  };
};
// if (isset($_POST['pas'])) {
//   change_password($_COOKIE['name']);
//   header('Location: ./index.php');
//   data_replacement();
//   $lines = file('.htpasswd');
//   $IdNum = count($lines) - 1;
//   setcookie("name", "$IdNum");
// };
?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <title>Персональная страница</title>
  <meta charset="UTF-8">
  <link rel="icon" href="favicon.ico">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="index.css">
</head>

<body>
  <form class="form" action="personalPage.php" method="post">
    <h3>Персональная страница</h3>

    <div class="form_border">
      <div class="logIn">
        <label name="name" class="logInLabel">Имя</label>
        <?= isset($errors['name']) ? "<div class='errors'>" . $errors['name'] . "</div>" : "" ?>
        <input type="text" name="name" class="logInInput" placeholder="Имя" value="<?php echo $name ?>" required>
        <label name="phone" class="logInLabel">Телефон</label>
        <?= isset($errors['phone']) ? "<div class='errors'>" . $errors['phone'] . "</div>" : "" ?>
        <input type="tel" name="phone" class="logInInput" placeholder="Телефон" value="<?php echo $phone ?>" required>
        <label name="email" class="logInLabel">Электронная почта</label>
        <?= isset($errors['email']) ? "<div class='errors'>" . $errors['email'] . "</div>" : "" ?>
        <input type="email" name="email" class="logInInput" placeholder="email" value="<?php echo $email ?>" required>

        <!-- <div class="logIn">
          <label name="next_pas" class="logInLabel">Новый пароль</label>
          <p style="font-size:large">Можно не менять, сохранится прежний</p>
          <?= isset($errors['pas']) ? "<div class='errors'>" . $errors['pas'] . "</div>" : "" ?>
          <input type="password" name="next_pas" class="logInInput" placeholder="***">
        </div> -->
        <div class="logIn">
          <button type="submit" name="log" class="logInInput">Изменить данные пользователя</button>
        </div>
      </div>
      <div class="logIn">
        <button type="submit" name="exit" class="logInInput">Выход</button>
      </div>
    </div>
  </form>
</body>

</html>