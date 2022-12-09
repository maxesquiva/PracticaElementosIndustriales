<?php

class Database
{
    // PDO representa una conexión entre PHP y un servidor de bases de datos.
    private $pdo;

    // Utilizar el patron singleton en vez de la chapuza de hacer una conexion 
    //a la base de datos en cada uno de los ficheros.

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
        //dsn nos permiten conectarnos a la bases de datos de MySQL
        $this->pdo = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    }

    public function getAll($query)
    {
        try {
            $consulta = $this->getPDO()->query($query);
            //te trae todos los datos de golpe en un array asociativo.
            return $consulta->fetchAll(PDO::FETCH_ASSOC);//Recupera una fila de resultados como un array asociativo
        } catch (PDOException $e) {
            return null;
        }
    }

    public function getById($query, $id)
    {
        try {
            $consulta = $this->getPDO()->prepare($query); // ponemos la query
            $consulta->bindParam(':id', $id, PDO::PARAM_INT); // sustituimos el :id por el valor verdaero
            $consulta->execute(); // ejecuta la consulta 
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return null;
        }
    }

    public function insert($query, $data)
    {
        try {
            //prepare() Prepara una sentencia SQL para su ejecución
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
