<?php

class Database
{

    private $pdo;

    // Utilizar el patron singleton en vez de la chapuza de hacer una conexion a la base de datos en cada uno de los ficheros.
    // El constructor recibe como parametro los datos necesarios para realizar una conexion a la base de datos
    public function __construct($user, $password, $host, $port, $name)
    {
        $this->user = $user;
        $this->password = $password;
        $this->host = $host;
        $this->port = $port;
        $this->name = $name;
        //domain source Name -> Nombre de origen de datos
        //WRAPERS
        $dsn = 'mysql:host=' . $host . ';port=' . $port . ';dbname=' . $name;
        $this->pdo = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    }

    public function getAll($query)
    {
        try {
            $consulta = $this->getPDO()->query($query);
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return null;
        }
    }

    public function getById($query, $id)
    {
        try {
            $consulta = $this->getPDO()->prepare($query); // ponemos la query
            $consulta->bindParam(':id', $id, PDO::PARAM_INT); // sustituimos el :id por el valor verdaero
            $consulta->execute(); // ejecuta la consulta fin
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return null;
        }
    }

    public function insert($query, $data)
    {
        try {
            return $this->getPDO()->prepare($query)->execute($data);
        } catch (PDOException $e) {
            return null;
        }
    }

    public function getPDO()
    {
        return $this->pdo;
    }

    public function getTheSame($query, $id)
    {
        try {
            $consulta = $this->getPDO()->prepare($query); // ponemos la query
            $consulta->bindParam(':id', $id, PDO::PARAM_INT); // sustituimos el :id por el valor verdaero
            $consulta->execute(); // ejecuta la consulta fin
            return $consulta->fetchColumn();
        } catch (PDOException $e) {
            return null;
        }
    }
}
