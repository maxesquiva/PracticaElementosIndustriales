<?php
require_once 'MySQL/Database.php';

try {

    $db = new Database('root', '', '127.0.0.1', '3306', 'monfab');

    $data = [
        'nombre' =>  $_POST['nombre'] ?? 'sin nombre',
        'descripcion' => $_POST['descripcion'] ?? 'sin ndescripcion',
        'nserie' => $_POST['nserie'] ?? '1234',
        'estado' => $_POST['estado'] ?? 'Inactivo',
        'prioridad' => $_POST['prioridad'] ?? 'Baja'
    ];
    // if (empty($data['nombre'])) {
    //     $data['nombre'] = 'antonio';
    // }
    // if (empty($data['descripcion'])) {
    //     $data['descripcion'] = 'es un poco subnormal';
    // }
    // if (empty($data['nserie'])) {
    //     $data['nserie'] = '1234';
    // }
    // if (empty($data['estado'])) {
    //     $data['estado'] = 'desactivado';
    // }
    // if (empty($data['prioridad'])) {
    //     $data['prioridad'] = 'Media';
    // }

    if (strtoupper($data['estado'] === 'ACTIVO')) {
        $data['estado'] = 'Activo';
    } else {
        $data['estado'] = 'Inactivo';
    }

    switch (strtoupper($data['prioridad'])) {
        case "BAJA":
            $data['prioridad'] = "Baja";
            break;
        case "MEDIA":
            $data['prioridad'] = "Media";
            break;
        case "ALTA":
            $data['prioridad'] = "Alta";
            break;
        default:
            $data['prioridad'] = "Baja";
            break;
    }

    $response['message'] = '';
    $response['success'] = false;
    $response['data'] = '';

    $consultaInsert = 'INSERT INTO elementos(nombre, descripcion, nserie, estado, prioridad) VALUES (:nombre, :descripcion, :nserie, :estado, :prioridad)';
    $consultaSelect = 'SELECT * FROM elementos WHERE id=:id';

    $executeInsert = $db->insert($consultaInsert, $data);
    $executeSelect = $db->getById($consultaSelect, $db->getPDO()->lastInsertId());
    if (empty($executeInsert)) {
        throw new Exception('No se ha podido insertar el registro.');
    }

    $response['success'] = true;
    $response['message'] = 'Se ha insertado correctamente el registro.';
    $response['data'] = $executeSelect;
} catch (Exception $e) {
    $response['message'] = $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);
