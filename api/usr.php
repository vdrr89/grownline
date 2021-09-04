<?php
session_start();
header("Content-Type: application/json");
//echo $_SESSION['usr'];
$json[] = array('usr' => $_SESSION['usr']);
$jsonstring = json_encode($json[0]);
echo $jsonstring;


?>