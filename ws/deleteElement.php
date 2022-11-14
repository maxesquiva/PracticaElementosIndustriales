<?php
require_once 'MySQL/Database.php';

try {

    $db = new Database('root', '', '127.0.0.1', '3306', 'monfab');
    $id = $_GET['id'] ?? null;
    $response['message'] = '';
    $response['success'] = false;

    if (empty($id)) {
        throw new Exception('Tienes que seleccionar un ID por defecto');
    }

    $consultaSelect = 'SELECT * FROM elementos WHERE id = :id';
    $elementById = $db->getById($consultaSelect, $id);

    if (empty($elementById)) {
        throw new Exception('No se ha encontrado un registro con el id: ' . $id);
    }

    $consultaDelete = 'DELETE FROM elementos WHERE id = :id';
    $respuesta = $db->getById($consultaDelete, $id);

    $response['success'] = true;
    $response['message'] = 'Se ha borrado el registro con el id: ' . $id;
    $response['data'] = $elementById;
} catch (Exception $e) {
    $response['message'] = $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);
