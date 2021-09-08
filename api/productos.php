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
        $sent = "select * from prod where id = " . $_GET['id'];
        $result = obtener($sent);
        echo json_encode(mysqli_fetch_assoc($result));
    } elseif (!isset($_GET['id'])){
        $sent = "select * from prod";
        $result = obtener($sent);
        
        $json = array();
        while($row = mysqli_fetch_array($result)) {
          $json[] = array(
            'nombre' => $row['nombre'],
            'descripcion' => $row['descripcion'],
            'precio' => $row['precio'],
            'cantidad' => $row['cantidad'],
            'lnk_img' => $row['lnk_img'],
            'id' => $row['id']
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
