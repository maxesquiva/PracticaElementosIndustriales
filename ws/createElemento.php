<?php
require_once './interfaces/IToJson.php';
require_once './models/Element.php';


$nombreElemento = "";
if (!empty($_POST['nombreElemento'])) {
    $nombreElemento = $_POST['nombreElemento'];
}

$descripcion = "";
if (!empty($_POST['BoxDescription'])) {
    $descripcion = $_POST['BoxDescription'];
}

$numeroDeSerie = "";
if (!empty($_POST['serialNumber'])) {
    $numeroDeSerie = $_POST['serialNumber'];
}

$estadoDelElemento = "";
if (!empty($_POST['check'])) {
    $estadoDelElemento = $_POST['check'];
}

$prioridad = "";
if (!empty($_POST['Prioridad'])) {
    $prioridad = $_POST['Prioridad'];
}

$Elemento1 = new Elements($nombreElemento, $descripcion, $numeroDeSerie, $estadoDelElemento, $prioridad);
$Elemento1->toJson();


// public function toJson(){
//      $arrayFormulario = array('nombreElemento'=>$nombreElemento, 'descripcion'=>$descripcion,'numeroDeSerie'=>$numeroDeSerie, 'estado'=>$estadoDelElemento,'prioridad'=>$Prioridad);
// $arrayJson=json_encode($arrayFormulario);
// $archivo="./baseDeDatos.txt";
 
//      $file=fopen($archivo,"a");
//      // fwrite($file,"Nombre del elemento:".$nombreElemento.".\n");
//      // fwrite($file,"Descripcion:".$descripcion.".\n");
//      // fwrite($file,"Numero de serie:".$numeroDeSerie.".\n");
//      // fwrite($file,"Estado del elemento:".$estadoDelElemento.".\n");
//      // fwrite($file,"Prioridad:".$Prioridad.".\n".".\n");
//      fwrite($file,$arrayJson.PHP_EOL);
//     fclose($file);

//    // echo ($file."Nombre del elemento: ".$nombreElemento.".\n"."Descripcion: ".$descripcion.".\n"."Estado del elemento: ".$estadoDelElemento.".\n"."Prioridad: ".$Prioridad.".\n".".\n");

// $Elemento1 = new Elements("Control de humo","Los sensores de humo son capaces de detectar el humo de un lugar a tiempo",1582,true,"Alta");
    

// echo json_encode($arrayFormulario);
// }
// Luego sobrescribo el txt


// if(isset($_POST['submit'])){
//     $nombreElemento = "Nombre del elemento: ". $_POST['nombreElemento']."";
//     $descripcion = "Descripcion: ".$_POST['BoxDescription']."";
//     $numeroDeSerie = "Numero de serie:".$_POST['serialNumber']."";
//     $estadoDelElemento = "Estado del Elemento: ".$_POST['check']."";
//     $Prioridad = "Prioridad: ".$_POST['prioridad']."";

//     $file=fopen("/baseDeDatos.txt", "a");
//     fwrite($file, $nombreElemento);
//     fwrite($file, $descripcion);
//     fwrite($file, $numeroDeSerie);
//     fwrite($file, $estadoDelElemento);
//     fwrite($file, $Prioridad);
//     fclose($file);
// }
// //Declaro los textos que van a usar los botones de los submits
// const GUARDAR = 'Guardar';
// const VER_DATOS = 'VerDatos';
// $datos = [];
// //Inicializo las variables que contienen los valores de los inputs a null en caso de que no se haya enviado el formulario aún
// $nombreElemento = $_POST['nombreElemento'] ?? null;
// $descripcion = $_POST['BoxDescription'] ?? null;
// $numeroDeSerie = $_POST['serialNumber'] ?? null;
// $estadoDelElemento = $_POST['check'] ?? null;
// $Prioridad = $_POST['prioridad'] ?? null;
// //Si el metodo de la solicitud es un post es decir si se envio el formulario y la operacion tiene algun valor
// if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['operacion'])){
//   //Si la operacion es la de guardar.....
//   if($_POST['operacion'] === GUARDAR){
//       //Abro el archivo para escribir
//       $file = @fopen("baseDeDatos.txt", "a");        
//       //Guardo el arreglo codificado a json
//       fwrite($file,"$nombreElemento,$apellido,$numeroDeSerie,$estadoDelElemento,$prioridad".PHP_EOL);
//       //Cierro el archivo
//       fclose($file);
//       //Si quieres limpiar el formulario despues de guardar los datos descomentarea estas 2 lineas
//       //$nombre = null;
//       //$apellido = null;
//   } else {
//       //Si la operacion es la de Cargar o ver y el archivo existe
//       if(file_exists('baseDeDatos.txt')){
//           //Almaceno el contenido completo del archivo en esta variable
//           $content = trim(file_get_contents('baseDeDatos.txt'), PHP_EOL);
//           //Obtengo todas las entradas por lineas del archivo
//           $lineas = explode(PHP_EOL, $content);
//           foreach($lineas as $linea){
//               list($nombreElemento,$apellido,$numeroDeSerie,$estadoDelElemento,$prioridad) = explode(',', $linea);
//               $datos[] = ['nombreElemento' => $nombreElemento, 'BoxDescription' => $descripcion, 'serialNumber' => $numeroDeSerie,'check'=> $estadoDelElemento, 'prioridad'=>$Prioridad];
//           }
//       }
//   }
// }
// if(!empty($datos)){
//     $body .= '
//         <br />
//         <table border="1">
//             <tr>
//                 <th>NombreElemento</th>
//                 <th>BoxDescription</th>
//                 <th>serialNumber</th>
//                 <th>check</th>
//                 <th>prioridad</th>
//             </tr>
//     ';
//     foreach($datos as $elemento){
//         $body .= '
//             <tr><td>'.$elemento['nombreElemento'].'</td><td>'.$elemento['BoxDescription'].$elemento['serialNumber'].$elemento['chek'].$elemento['prioridad'].'</td></tr>
//         ';
//     }
//     $body .= '</table>';
// }
// $body .= '
//     </body>
//     </html>';
//Renderizo el cuerpo de la página
// echo $body;


// const Guardar = 'Guardar';
// const verDatos = 'VerDatos';
// $datos = [];

// $nombreElemento = $_POST['nombreElemento'] ?? null;
// $descripcion = $_POST['BoxDescription'] ?? null;
// $numeroDeSerie = $_POST['serialNumber'] ?? null;
// $estadoDelElemento = $_POST['check'] ?? null;
// $Prioridad = $_POST['prioridad'] ?? null;

// if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['operacion'])){
//     //Si la operacion es la de guardar.....
//     if($_POST['operacion'] === Guardar){
//         //Abro el archivo para escribir
//         $file = @fopen("baseDeDatos.txt", "a");
//         //Guardo el arreglo codificado a json
//       fwrite($file, "$nombreElemento,$apellido,$numeroDeSerie,$estadoDelElemento,$prioridad".PHP_EOL);
//       fclose($file); 
//     } else {
//         //Si la operacion es la de Cargar o ver y el archivo existe
//         if(file_exists('archivo.txt')){ 
//             $content = trim(file_get_contents('baseDeDatos.txt'), PHP_EOL);
//             $lineas = explode(PHP_EOL, $content);
//           foreach($lineas as $linea){
//               list($nombreElemento,$apellido,$numeroDeSerie,$estadoDelElemento,$prioridad) = explode(',', $linea);
//               $datos[] = ['nombreElemnto' => $nombreElemento, 'BoxDescription' => $descripcion, 'serialNumber' => $numeroDeSerie,'check'=> $estadoDelElemento, 'Prioridad'=>$Prioridad];
//           }
//       }
//   }
// }
//$Elemento1 = new Elements("Control de humo","Los sensores de humo son capaces de detectar el humo de un lugar a tiempo",1582,true,"Alta");

// $baseDeDatos = "baseDeDatos.txt";

// file_put_contents($baseDeDatos,$datos,FILE_APPEND);
//echo $nombre;