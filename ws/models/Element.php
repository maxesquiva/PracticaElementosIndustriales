<?php
require_once './interfaces/IToJson.php';
require_once './createElemento.php';

class Elements implements IToJson
{
    public $nombreElemento;
    public $descripcion;
    public $numeroDeSerie;
    public $estadoDelElemento;
    public $prioridad;

    public function __construct($nombreElemento, $descripcion, $numeroDeSerie, $estadoDelElemento, $prioridad)
    {
        $this->nombreElemento = $nombreElemento;
        $this->descripcion = $descripcion;
        $this->numeroDeSerie = $numeroDeSerie;
        $this->estadoDelElemento = $estadoDelElemento;
        $this->prioridad = $prioridad;
    }
    /**
     * Get the value of nombreElemento
     */
    public function getNombreElemento()
    {
        return $this->nombreElemento;
    }

    /**
     * Set the value of nombreElemento
     *
     * @return  self
     */
    public function setNombreElemento($nombreElemento)
    {
        $this->nombreElemento = $nombreElemento;

        return $this;
    }

    /**
     * Get the value of numeroDeSerie
     */
    public function getNumeroDeSerie()
    {
        return $this->numeroDeSerie;
    }

    /**
     * Set the value of numeroDeSerie
     *
     * @return  self
     */
    public function setNumeroDeSerie($numeroDeSerie)
    {
        $this->numeroDeSerie = $numeroDeSerie;

        return $this;
    }

    /**
     * Get the value of estadoDelElemento
     */
    public function getEstadoDelElemento()
    {
        return $this->estadoDelElemento;
    }

    /**
     * Set the value of estadoDelElemento
     *
     * @return  self
     */
    public function setEstadoDelElemento($estadoDelElemento)
    {
        $this->estadoDelElemento = $estadoDelElemento;

        return $this;
    }

    /**
     * Get the value of prioridad
     */
    public function getPrioridad()
    {
        return $this->prioridad;
    }

    /**
     * Set the value of prioridad
     *
     * @return  self
     */
    public function setPrioridad($prioridad)
    {
        $this->prioridad = $prioridad;

        return $this;
    }
    /**
     * Get the value of descripcion
     */
    public function getDescripcion()
    {
        return $this->descripcion;
    }

    /**
     * Set the value of descripcion
     *
     * @return  self
     */
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;

        return $this;
    }
    public function toJson()
    {
        $arrayFormulario = array('nombreElemento' => $this->nombreElemento, 'descripcion' => $this->descripcion, 'numeroDeSerie' => $this->numeroDeSerie, 'estado' => $this->estadoDelElemento, 'prioridad' => $this->prioridad);
        $arrayJson = json_encode($arrayFormulario);
        $archivo = "./baseDeDatos.txt";

        $file = fopen($archivo, "a");
        // fwrite($file,"Nombre del elemento:".$nombreElemento.".\n");
        // fwrite($file,"Descripcion:".$descripcion.".\n");
        // fwrite($file,"Numero de serie:".$numeroDeSerie.".\n");
        // fwrite($file,"Estado del elemento:".$estadoDelElemento.".\n");
        // fwrite($file,"Prioridad:".$Prioridad.".\n".".\n");
        fwrite($file, $arrayJson . PHP_EOL);
        fclose($file);

        // echo ($file."Nombre del elemento: ".$nombreElemento.".\n"."Descripcion: ".$descripcion.".\n"."Estado del elemento: ".$estadoDelElemento.".\n"."Prioridad: ".$Prioridad.".\n".".\n");

        $Elemento1 = new Elements("Control de humo", "Los sensores de humo son capaces de detectar el humo de un lugar a tiempo", 1582, true, "Alta");
        echo json_encode($arrayFormulario);
    }
}

      