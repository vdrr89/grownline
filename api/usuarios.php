<?php
//hola
//ALTER TABLE `usuarios` ADD `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY
include_once 'db.php';
header("Content-Type: application/json");

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
            'id' => $row['id'], // DARIO agregué este, agregar a BD
            'username' => $row['username'], // DARIO agregué este, agregar a BD
            'email' => $row['email'], // DARIO agregué este, agregar a BD
            'profilepic' => $row['profilepic'], // DARIO agregué este, agregar a BD
            'nombre' => $row['nombre'],
            'apellido' => $row['apellido'],
            'fechaNac' => $row['fechaNac'], // DARIO creo que agregué este
            'pais' => $row['pais'], 
            'categoria' => $row['categoria'] // DARIO agregué este, agregar a BD
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
