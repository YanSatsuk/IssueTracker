<?php
$path = isset($_GET['path']) ? $_GET['path'] : '';
$data = json_decode(file_get_contents("php://input"));
if (isset($data->path)) {
    include($data->path);
}
?>
<nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">Issue Tracker</span>
    <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" id="loginBtn" type="submit" name="her">Login</button>
    </form>
</nav>