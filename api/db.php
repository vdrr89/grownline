<?php
session_start();

function guardar($sent){
    $link = mysqli_connect("localhost", "usr1", "pass1", "usuarios");
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
    if (!mysqli_query($link, $sent)) {
        printf("Errormessage: %s\n", mysqli_error($link));
        echo mysql_errno($link) . ": " . mysql_error($link) . "\n";
        mysqli_close($link);
    }
    mysqli_close($link);
}

function obtener($sent){
    $link = mysqli_connect("localhost", "usr1", "pass1", "usuarios");
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
    if (!$result = mysqli_query($link, $sent)) {
        printf("Errormessage: %s\n", mysqli_error($link));
        echo mysql_errno($link) . ": " . mysql_error($link) . "\n";
        mysqli_close($link);
    } else {
        mysqli_close($link);
        return $result;
    }
}


?>