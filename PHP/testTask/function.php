<?php
// Проверяем формат записи на соотвествие телефону
function valid_phone($tel)
{
    if (preg_match("/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/", $tel)) {
        return true;
    } else {
        return false;
    };
};
// Проверяем на соотвествие телефоны с разным вариантом начала +7 или 8
function phone_phone($tel1, $tel2)
{
    $tel1 = substr($tel1, -10);
    $tel2 = substr($tel2, -10);
    if (strcasecmp($tel1, $tel2) == 0) {
        return true;
    } else {
        return false;
    };
};
// Проверяем формат записи на соотвествие электронной почты
function valid_email($email)
{
    if (preg_match("/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i", $email)) {
        return true;
    } else {
        return false;
    }
};
// Поиск строки совпадения телефона с входящим параметром
function loginPhone($tel)
{
    $lines = file('.htpasswd');
    for ($i = 0; $i < count($lines); $i++) {
        $info = explode(":", $lines[$i]);
        if (phone_phone($info[1], $tel) == TRUE) {
            return $i;
        };
    };
};
// Поиск строки совпадения электронной почты с входящим параметром
function loginEmail($email)
{
    $lines = file('.htpasswd');
    for ($i = 0; $i < count($lines); $i++) {
        $info = explode(":", $lines[$i]);
        if ($info[2] == $email) {
            return $i;
        }
    }
};
// Авторизация пользователя
function authorization($IdNum)
{
    session_start();
    setcookie("name", "$IdNum");
    // $_SESSION['id'] = $IdNum;
    http_response_code(301);
    header('Location: ./personalPage.php');
}
// Выход из сессии c зачисткой следов
function TheEnd()
{
    $_SESSION = [];
    setcookie("name", '', time() - 46000);
    session_destroy();
    header('Location: ./index.php');
};
// Добавить пользователя
function create_user($name, $phone, $email, $pas)
{
    $hash = password_hash($pas, PASSWORD_DEFAULT);
    file_put_contents(USER_BASE_FILE, "$name:$phone:$email:$hash\n", FILE_APPEND | LOCK_EX);
};
// Создаём временный файл с данными кроме строки указанного номера, без изменения пароля
function new_base($num)
{
    $lines = file('.htpasswd');
    for ($i = 0; $i < count($lines); $i++) {
        $info = explode(":", $lines[$i]);
        $name = $info[0];
        $phone = $info[1];
        $email = $info[2];
        $pas = $info[3];
        if ($num != $i) {
            file_put_contents('new.txt', "$name:$phone:$email:$pas", FILE_APPEND | LOCK_EX);
        }
    };
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    // if ($_POST['pas'] === "") {
        file_put_contents('new.txt', "$name:$phone:$email:$pas", FILE_APPEND | LOCK_EX);
    // } else {
    //     $pas = $_POST['pas'];
    //     $hash = password_hash($_POST['pas'], PASSWORD_DEFAULT);
    //     file_put_contents('new.txt', "$name:$phone:$email:$hash\n", FILE_APPEND | LOCK_EX);
    // };
}
// Меням старую версию базы данных на новую
function data_replacement()
{
    if (file_exists('.htpasswd') == TRUE && file_exists('new.txt') == TRUE) {
        unlink('.htpasswd');
        rename('new.txt', '.htpasswd');
    };
}
