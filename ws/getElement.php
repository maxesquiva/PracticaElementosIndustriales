<?php
require_once 'MySQL/Database.php';

try {

    $db = new Database('root', '', '127.0.0.1', '3306', 'monfab');
    $id = $_GET['id'] ?? null;
    $respuestaJson = [];
    $consulta = 'SELECT * FROM elementos';
    //si hay una id devuelves el datos que tiene esa id si no devuelves todos.
    // si pasas una id que no  es null.
    if ($id !== null) { 
        $consulta .= " WHERE id = :id";
        // variable respuesta = psamos funcion prepare cuyos parametros son culsultar id
        $respuesta = $db->getById($consulta, $id); 
    }else{
        $respuesta = $db->getAll($consulta);
    }
    
    if (empty($respuesta)) {
      $respuestaJson['success'] = false;
      $respuestaJson['message'] = 'no se ha podido encontrar';
      $respuestaJson['data'] = $respuesta;
    } else {
        $respuestaJson['success'] = true;
        $respuestaJson['message'] = 'todo correcto';
        $respuestaJson['data'] = $respuesta;
    }
    
    echo json_encode($respuestaJson, JSON_PRETTY_PRINT);

} catch (Exception $e) {
    echo "ha fallado la conexion por" . $e->getMessage();
}


