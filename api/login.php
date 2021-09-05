<?php
session_start();

$usr = $_POST['nom_usr'];
$_SESSION['usr'] = $usr;

?>
