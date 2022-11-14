<?php
require_once 'MySQL/Database.php';

try {

    $db = new Database('root', '', '127.0.0.1', '3306', 'monfab');
    $consultaNombre = 'SELECT nombre FROM elementos WHERE id=:id';
    $consultaDescripcion = 'SELECT descripcion FROM elementos WHERE id=:id';
    $consultaNserie = 'SELECT nserie FROM elementos WHERE id=:id';
    $consultaEstado = 'SELECT estado FROM elementos WHERE id=:id';
    $consultaPrioridad = 'SELECT prioridad FROM elementos WHERE id=:id';



    $data = [
        // TODO mantener dato que no me lo pase a null si no que tenga valores por defecto.
        'nombre' =>  $_POST['nombre'] ?? $db->getTheSame($consultaNombre, $_GET['id']),
        'descripcion' => $_POST['descripcion'] ?? $db->getTheSame($consultaDescripcion, $_GET['id']),
        'nserie' => $_POST['nserie'] ?? $db->getTheSame($consultaNserie, $_GET['id']),
        'estado' => $_POST['estado'] ?? $db->getTheSame($consultaEstado, $_GET['id']),
        'prioridad' => $_POST['prioridad'] ?? $db->getTheSame($consultaPrioridad, $_GET['id']),
        'id' => $_GET['id'] ?? null
    ];

    // $consultaNombre = 'SELECT nombre FROM elementos WHERE id=:id';
    // $consultaDescripcion = 'SELECT descripcion FROM elementos WHERE id=:id';

    // if ( !empty ($data['nombre']) || !empty ($data['descripcion'])) {

    //     $data['nombre'] = $db->getTheSame($consultaNombre, $data['id']);
    //     $data['descripcion'] = $db->getTheSame($consultaDescripcion, $data['id']);
    // }


    // switch ($data) {
    //     case (empty($data['nombre'])):
    //         $data['nombre']= $db->getTheSame($consultaNombre, $data['id']);

    //     case (empty($data['descripcion'])):
    //         $data['descripcion']= $db->getTheSame($consultaDescripcion, $data['id']);

    //     case (empty($data['nserie'])):
    //         $data['nserie'] = $db->getTheSame($consultaNserie, $data['id']);         

    //     case (empty($data['prioridad'])):
    //         $data['prioridad'] = $db->getTheSame($consultaPrioridad, $data['id']);

    //     case (empty($data['estado'])):
    //         $data['estado'] = $db->getTheSame($consultaEstado, $data['id']);
    //         break;
    //   }
    // $consultaNombre = 'SELECT nombre FROM elementos WHERE id=:id';
    // $consultaDescripcion = 'SELECT descripcion FROM elementos WHERE id=:id';

    // $consultaNombre = 'SELECT nombre FROM elementos WHERE id=:id';
    // $consultaDescripcion = 'SELECT descripcion FROM elementos WHERE id=:id';
    // $consultaNserie = 'SELECT nserie FROM elementos WHERE id=:id';
    // $consultaPrioridad = 'SELECT prioridad FROM elementos WHERE id=:id';
    // $consultaEstado = 'SELECT estado FROM elementos WHERE id=:id';

    // if (empty($data['nombre'])) {
    //     $data['nombre'] = $db->getTheSame($consultaNombre, $data['id']);
    // }
    // if (empty($data['descripcion'])) {
    //     $data['descripcion'] = $db->getTheSame($consultaDescripcion, $data['id']);
    // }
    // if (empty($data['nserie'])) {
    //     $data['nserie'] = $db->getTheSame($consultaNserie, $data['id']);
    // }
    // if (empty($data['prioridad'])) {
    //     $data['prioridad'] = $db->getTheSame($consultaPrioridad, $data['id']);
    // }
    // if (empty($data['estado'])) {
    //     $data['estado'] = $db->getTheSame($consultaEstado, $data['id']);
    // }

    $response['message'] = '';
    $response['success'] = false;

    $consultaInsert = 'UPDATE elementos SET nombre=:nombre, descripcion=:descripcion, nserie=:nserie , estado=:estado, prioridad=:prioridad, estado=:estado where id=:id';
    $consultaSelect = 'SELECT * FROM elementos WHERE id=:id';

    $executeInsert = $db->insert($consultaInsert, $data);
    $executeSelect = $db->getById($consultaSelect, $data['id']);

    if (empty($executeInsert)) {
        throw new Exception('No se ha podido insertar el registro.');
    }
    $response['success'] = true;
    $response['message'] = 'Se ha actualizado correctamente el registro con ID: ' . $data['id'];
    $response['data'] = $executeSelect;
} catch (Exception $e) {
    $response['message'] = $e->getMessage();
}
echo json_encode($response, JSON_PRETTY_PRINT);
