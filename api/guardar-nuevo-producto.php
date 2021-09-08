<?php

$link = mysqli_connect("localhost", "usr1", "pass1", "tienda_passe");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}


if (isset($_POST['agregar_prod'])) {

    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $cantidad = $_POST['cantidad'];
    $precio = $_POST['precio'];
  
    if ($_FILES["archivo"]){
        echo "hay archivo";
      $nombre_base = basename($_FILES['archivo']['name']);
      echo "<br> nombre base: " . $nombre_base;
      $nombre_final = date("m-d-y") . "_" . date("H-i-s") . "_" . $nombre_base;
      $ruta = "../gestion/create-product/imgs/" . $nombre_final;
      echo "<br>ruta: " . $ruta;
      $subirarchivo = move_uploaded_file($_FILES['archivo']['tmp_name'], $ruta);
      if($subirarchivo){
          echo "<br> archivo subido";
        $query = "INSERT INTO prod(nombre, lnk_img, descripcion, precio, cantidad) 
        VALUES ( '$nombre', '$nombre_base', '$descripcion', '$precio', '$cantidad')";
        echo "<br>" . $query;
        $result = mysqli_query($link, $query);
        if($result){
            mysqli_close($link);
          header("Location: ../gestion/gestion.html" );
        } else {
            echo "ubo un error";
            mysqli_close($link);
          printf("Errormessage: %s\n", mysqli_error($conexion));
        }
      }else{
          echo "<br> error al subir archivo";
      }
    }
}





?>