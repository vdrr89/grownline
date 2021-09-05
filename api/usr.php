<?php
session_start();
header("Content-Type: application/json");
//echo $_SESSION['usr'];
if(isset($_SESSION['usr'])){
    $json[] = array('usr' => $_SESSION['usr']);
    $jsonstring = json_encode($json[0]);
    echo $jsonstring;
}elseif(!isset($_SESSION['usr'])){
    $json[] = array('usr' => 'invitado');
    $jsonstring = json_encode($json[0]);
    echo $jsonstring;
}


?>