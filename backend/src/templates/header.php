<?php
$path = isset($_POST['path']) ? $_POST['path'] : '';
$data = json_decode(file_get_contents("php://input"));
if (isset($data->path)) {
    $_SESSION['path'] = $data->path;
}
?>
<nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">Issue Tracker</span>
    <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" id="loginBtn" type="submit">Login</button>
    </form>
</nav>