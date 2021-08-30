<?php
//hola
//ALTER TABLE `usuarios` ADD `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY

header("Content-Type: application/json");

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


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_POST = json_decode(file_get_contents('php://input'), true);
    $sent = "insert into usuarios (nombre, apellido, fechaNac, pais) values 
    ('".$_POST['nombre']."', '".$_POST['apellido']."', '".$_POST['fechaNac']."', '".$_POST['pais']."') ";
    guardar($sent);
         
}elseif($_SERVER['REQUEST_METHOD'] == 'GET'){
    if(isset($_GET['id'])){
        $sent = "select * from usuarios where id = " . $_GET['id'];
        $result = obtener($sent);
        echo json_encode(mysqli_fetch_assoc($result));
    } elseif (!isset($_GET['id'])){
        $sent = "select * from usuarios";
        $result = obtener($sent);
        
        $json = array();
        while($row = mysqli_fetch_array($result)) {
          $json[] = array(
            'nombre' => $row['nombre'],
            'apellido' => $row['apellido'],
            'fechaNac' => $row['fechaNac'],
            'pais' => $row['pais']
          );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

}elseif($_SERVER['REQUEST_METHOD'] == 'PUT'){
    $put = json_decode(file_get_contents('php://input'), true);
    $sent = "update usuarios set nombre = '" .$put['nombre']. "', 
    apellido = '" .$put['apellido']. "', fechaNac = '" .$put['fechaNac'].
    "', pais = '".$put['pais']. "' where id = " . $_GET['id'];
    guardar($sent);
    
}elseif($_SERVER['REQUEST_METHOD'] == 'DELETE'){
    $sent = "delete from usuarios where id = " . $_GET['id'];
    guardar($sent);
}

?>
