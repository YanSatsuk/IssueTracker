<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

require __DIR__ . '/../../backend/src/db/users/UsersDB.php';
require_once __DIR__ . '/../../backend/src/models/User.php';

$data = json_decode(file_get_contents("php://input"));

$user = new User(
    $data->login,
    $data->email,
    $data->password
);

if (UsersDB::register($user)) {
    echo json_encode([
        'code' => http_response_code(200),
        'message' => 'Register success',
    ]);
} else {
    echo json_encode([
        'code' => http_response_code(500),
        'message' => 'Register failed',
    ]);
}