<?php
// DARIO estuve toqueteando toda esta página, fijate si está todo en orden
include_once 'db.php';
header("Content-Type: application/json");

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_POST = json_decode(file_get_contents('php://input'), true);
    $sent = "insert into usuarios (username, email, profilepic, nombre, apellido, fechaNac, pais, categoria) values 
    ('".$_POST['username']."', '".$_POST['email']."', '".$_POST['profilepic']."', '".$_POST['nombre']."', '".$_POST['apellido']."', '".$_POST['fechaNac']."', '".$_POST['pais']."', '".$_POST['categoria']."') ";
    guardar($sent);
         
}elseif($_SERVER['REQUEST_METHOD'] == 'GET'){
    if(isset($_GET['id'])){
        $sent = "select * from usu where id = " . $_GET['id'];
        $result = obtener($sent);
        echo json_encode(mysqli_fetch_assoc($result));
    } elseif (!isset($_GET['id'])){
        $sent = "select * from usu";
        $result = obtener($sent);
        
        $json = array();
        while($row = mysqli_fetch_array($result)) {
          $json[] = array(
            'username' => $row['username'], 
            'email' => $row['email'], 
            'profilepic' => $row['profilepic'] 
            'nombre' => $row['nombre'],
            'apellido' => $row['apellido'],
            'fechaNac' => $row['fechaNac'], 
            'telefono' => $row['telefono'], 
            'direccion' => $row['direccion'],
            'pais' => $row['pais'], 
            'categoria' => $row['categoria'] 
          );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

}elseif($_SERVER['REQUEST_METHOD'] == 'PUT'){
    $put = json_decode(file_get_contents('php://input'), true);
    $sent = "update usuarios set username = '" .$put['username']. "', 
    profilepic = '" .$put['profilepic']. "', nombre = '" .$put['nombre'].
    "', apellido = '".$put['apellido']. "', fechaNac = '" .$put['fechaNac']. 
    "', pais = '".$put['pais']. "', categoria = '" .$put['categoria'] "' where id = " . $_GET['id'];
    guardar($sent);
    
}elseif($_SERVER['REQUEST_METHOD'] == 'DELETE'){
    $sent = "delete from usu where id = " . $_GET['id'];
    guardar($sent);
}

?>
