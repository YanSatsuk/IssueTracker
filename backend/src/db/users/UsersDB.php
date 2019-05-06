<?php

require __DIR__ . '/../MySQLConnect.php';
require_once __DIR__ . '/../../models/User.php';

class UsersDB
{
    private static $mySQL = null;

    public static function register(User $user)
    {
        if ($user) {
            $table = User::$table;
            $conn = self::connect();
            $login = $user->getLogin();
            $email = $user->getEmail();
            $password = password_hash($user->getPassword(), PASSWORD_BCRYPT);
            $sql = "INSERT INTO $table (login, email, password) VALUES ('$login', '$email', '$password')";
            mysqli_query($conn, $sql) || die('User insert failed: ' . mysqli_error($conn));
        }
        return true;
    }

    public static function login(User $user)
    {
        $response = false;
        if ($user) {
            $table = User::$table;
            $conn = self::connect();
            $email = $user->getEmail();
            $password = $user->getPassword();
            $sql = "SELECT email, password FROM $table WHERE email = '$email'";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) > 0) {
                $hash = mysqli_fetch_assoc($result)['password'];
                if (password_verify($password, $hash)) {
                    $response = true;
                }
            }
        }
        return $response;
    }

    private static function connect()
    {
        return self::$mySQL = MySQLConnect::getConnect();
    }
}