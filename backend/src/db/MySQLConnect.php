<?php

class MySQLConnect
{
    const HOST = 'localhost:3306';
    const USER = 'root';
    const PASSWORD = null;
    const DATABASE = 'issues';
    private static $connect = null;

    public static function getConnect()
    {
        self::$connect = mysqli_connect(
            self::HOST,
            self::USER,
            self::PASSWORD,
            self::DATABASE
        );
        if (!self::$connect) {
            die('Connection failed: ' . mysqli_connect_error());
        }
        return self::$connect;
    }

    public static function close()
    {
        mysqli_close(self::$connect);
    }
}