

const formulario = [{
    boton: "X",
    NombreElemento: "detector de humos",
    descripcion: "Los sensores de humo son capaces de detectar el humo de un lugar a tiempo",
    NumeroSerie: 1582,
    Estado: true,
    Prioridad: "Alta"

}, {
    boton: "X",
    NombreElemento: "Medidor de presión",
    descripcion: "Los sensores medidores de presión son muy utilizados en el sector agrícola para conocer",
    NumeroSerie: 1582,
    Estado: true,
    Prioridad: "Media"
}, {
    boton: "X",
    NombreElemento: "Control de la humedad",
    descripcion: "Permiten tener controlados factores como el clima o el almacenamiento de productos perecederos",
    NumeroSerie: 1756,
    Estado: false,
    Prioridad: "Baja"
}
];

const $cuerpoTabla = document.querySelector("#cuerpoTabla");
formulario.forEach(formulario => {
    const $tr = document.createElement("tr");
    $tr.setAttribute("id", "trCreado")//asi proporcionamos atributos a los elementos que se crean.

    let $boton = document.createElement("button");
    $boton.textContent = formulario.boton;
    $tr.appendChild($boton);

    let $tdNombre = document.createElement("td");
    $tdNombre.textContent = formulario.NombreElemento;
    $tr.appendChild($tdNombre);
    $tdNombre.setAttribute("id", "nombre")
    $tdNombre.setAttribute("class", "tdCreado")

    let $tdDescripcion = document.createElement("td");
    $tdDescripcion.textContent = formulario.descripcion;
    $tr.appendChild($tdDescripcion);
    $tdDescripcion.setAttribute("class", "tdCreado")

    let $tdNumSerie = document.createElement("td");
    $tdNumSerie.textContent = formulario.NumeroSerie;
    $tr.appendChild($tdNumSerie);
    $tdNumSerie.setAttribute("class", "tdCreado")

    let $tdEstado = document.createElement("td");
    $tdEstado.textContent = formulario.Estado;
    $tr.appendChild($tdEstado);
    $tdEstado.setAttribute("class", "tdCreado")

    let $tdPrioridad = document.createElement("td");
    $tdPrioridad.textContent = formulario.Prioridad;;
    $tr.appendChild($tdPrioridad);
    $tdPrioridad.setAttribute("class", "tdCreado")

    $cuerpoTabla.appendChild($tr);

    $boton.onclick = function () {
        alert("Me voy a borrar")
        this.parentElement.remove($boton);//elimino el padre de $boton
    };


});


function filtro() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filtrar");
    filter = input.value.toUpperCase();
    table = document.getElementById("cuerpoTabla");
    tr = table.getElementsByTagName("tr");
    //recorre el array empezando por la posicion 0 y 1 y busca coincidencias con lo escritio en el input.

    for (i = 0; i < tr.length; i++) {

        if (filter.length >= 3) {
            td = tr[i].getElementsByTagName("td")[0, 1]; //cogemos los value de  nombre[0] y descripcion[1].

            if (td) {
                txtValue = td.textContent || td.innerText; // 
                //pasamos a mayuscula el contenido para determinar las coincidencias con lo que le metemmos por input.
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }

        } else {
            tr[i].style.display = "";
        }

    }
}
document.getElementById("filtrar").addEventListener("keyup", filtro); //KeyUp ejecuta la funcion filtrar cuando se pulsa la tecla.
// function filtro() {
//     // Accede al texto de entrada y a varios elementos del DOM
//     let filtrar = document.getElementById("filtrar").value.toUpperCase();
//     let nombres = document.getElementById("cuerpoTabla");
//     let filas = nombres.getElementsByTagName("tr");

//     // Iteramos el arreglo de filas
//     for (let i = 0; i < filas.length; i++) {
//         // Por cada fila se obtiene la referencia a la columna formulario
//         let columnaNombreDescrip = filas[i].getElementsByTagName("td")[0, 1];
//         // Se extrae el texto de la columna lenguaje
//         let contenidoColumnas = columnaNombreDescrip.textContent;
//         // Se muestra u oculta la fila si la entrada de texto
//         // coincide con el texto de la columna lenguaje
//         filas[i].style.display = contenidoColumnas.toUpperCase().indexOf(filtrar) > -1 ? "" : "none";
//     }
// }
// document.getElementById("filtrar").addEventListener("keyup", filtro);



/*var busqueda = document.getElementById('filtrar');
    var table = document.getElementById("tabla").tBodies[0];

    buscaTabla = function(){
      texto = busqueda.value.toLowerCase();
      var r=0;
      while(row = table.rows[r++])
      {
        if ( row.innerText.toLowerCase().indexOf(texto) !== -1 )
          row.style.display = null;
        else
          row.style.display = 'none';
      }
    }

    busqueda.addEventListener('keyup', buscaTabla);*/

// const productos = [{
//     NombreElemento : "detector de humos",
//         descripcion : "Los sensores de humo son capaces de detectar el humo de un lugar a tiempo",
//         NumeroSerie : 1582,
//         Estado : true,
//         Prioridad :"Alta"
// },
// {
//     id: 2,
//     nombre: "Xiaomi Mi A1",
//     precio: 5000,
//     codigo: "123444",
// },
// {
//     id: 3,
//     nombre: "Galletas",
//     precio: 10,
//     codigo: "20205",
// },
// {
//     id: 4,
//     nombre: "Computadora portátil",
//     precio: 30000,
//     codigo: "7700545",
// },
// ];

// // Ahora dibujamos la tabla
// const $cuerpoTabla = document.querySelector("#cuerpoTabla");
// // Recorrer todos los productos
// productos.forEach(producto => {
// // Crear un <tr>
// const $tr = document.createElement("tr");
// // Creamos el <td> de nombre y lo adjuntamos a tr
// let $tdNombre = document.createElement("td");
// $tdNombre.textContent = producto.NombreElemento; // el textContent del td es el nombre
// $tr.appendChild($tdNombre);
// // El td de precio
// let $tdPrecio = document.createElement("td");
// $tdPrecio.textContent = producto.precio;
// $tr.appendChild($tdPrecio);
// // El td del código
// let $tdCodigo = document.createElement("td");
// $tdCodigo.textContent = producto.codigo;
// $tr.appendChild($tdCodigo);
// // Finalmente agregamos el <tr> al cuerpo de la tabla
// $cuerpoTabla.appendChild($tr);
// // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
// });



// const DATOS = [
//     { nombres: 'Diego Antonio', apellidos: 'Platero Escobar', edad: 19, nacionalidad: 'Colombia' },
//     { nombres: 'Eduardo José', apellidos: 'Saravia García', edad: 25, nacionalidad: 'Honduras' },
//     { nombres: 'Andrea Ester', apellidos: 'Moreno Esquivel', edad: 17, nacionalidad: 'El Salvador' },
//     { nombres: 'Rebeca Andrea', apellidos: 'Pinto Castro', edad: 27, nacionalidad: 'Argentina' }
// ];

// // Obteniendo el cuerpo de la tabla a donde añadiremos nuestros datos
// let tableBody = document.getElementById('tbody');

// // Recorriendo los datos de ejemplo
// for (let i = 0; i < DATOS.length; i++) {
//     // Creando los 'td' que almacenará cada parte de la información del usuario actual
//     let name = `<td>${DATOS[i].nombres}</td>`;
//     let lastName = `<td>${DATOS[i].apellidos}</td>`;
//     let age = `<td>${DATOS[i].edad} años</td>`;
//     let country = `<td>${DATOS[i].nacionalidad}</td>`;

//     tableBody.innerHTML += `<tr>${name + lastName + age + country}</tr>`;
// }