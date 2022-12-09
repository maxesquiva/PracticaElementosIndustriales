// const formulario = [{
//     // poner los elementos en minusculas 
//     //     nombreElemento: "detector de humos",
//     //     descripcion: "Los sensores de humo son capaces de detectar el humo de un lugar a tiempo",
//     //     numeroSerie: 1582,
//     //     estado: true,
//     //     prioridad: "Alta"

//     // }, {
//     //     nombreElemento: "Medidor de presión",
//     //     descripcion: "Los sensores medidores de presión son muy utilizados en el sector agrícola para conocer",
//     //     numeroSerie: 1582,
//     //     estado: true,
//     //     prioridad: "Media"
//     // }, {
//     //     nombreElemento: "Control de la humedad",
//     //     descripcion: "Permiten tener controlados factores como el clima o el almacenamiento de productos perecederos",
//     //     numeroSerie: 1756,
//     //     estado: false,
//     //     prioridad: "Baja"
// }
// ];




const URL = './ws/getElement.php';
const URL_delete = './ws/deleteElement.php/?id=';
const nombre_URL = './ws/getElement.php/data/nombre';
const URL_Modify = './ws/modifyElements.php/?id=';
// let maps = [];

window.onload = () => {
    cargarElementos().then(elementos => cargaTexto(elementos));
};

async function cargarElementos() {
    
    return fetch(URL)
    .then(response => response.json());
    
}

function cargaTexto(jsonElementos) { //crear un boton por cada personaje de la appi 
    const cuerpoTabla = document.querySelector('#cuerpoTabla');
    jsonElementos.data.forEach((elementos, index) => {
        console.log(elementos);

        const tr = document.createElement('tr');
        tr.setAttribute("class", "TrClass");

        const boton = document.createElement('button');
        // let boton = document.createElement("button");
        boton.innertext = elementos.boton;
        tr.appendChild(boton);
        boton.setAttribute("class", "botonx");
        boton.setAttribute("id", jsonElementos.data[index].id);

        const editar = document.createElement('button');
        editar.innerText = elementos.editar;
        tr.appendChild(editar);
        editar.textContent = 'editar';
        editar.setAttribute("id","botonEditar");
        //creas la imagen

        let tdNombre = document.createElement("td");
        tdNombre.innerText = elementos.nombre;
        tr.appendChild(tdNombre);
        tdNombre.setAttribute("class", "TdModNombre");
        tdNombre.setAttribute("id", "TdModNombre_"+jsonElementos.data[index].id);
        tdNombre.setAttribute("data-id", jsonElementos.data[index].id);
        tdNombre.setAttribute("ondblclick","ModNombreX("+jsonElementos.data[index].id+")");


        let tdDescripcion = document.createElement("td");
        tdDescripcion.innerText = elementos.descripcion;
        tr.appendChild(tdDescripcion);
        tr.setAttribute("class", "TrClass");
        tdDescripcion.setAttribute("id", "idDescripcion");

        let tdNumSerie = document.createElement("td");
        tdNumSerie.innerText = elementos.nserie;
        tr.appendChild(tdNumSerie);
        tdNumSerie.setAttribute("class", "tdCreado");
        tdNumSerie.setAttribute("id", "tdNumSerie");

        let tdEstado = document.createElement("td");
        tdEstado.innerText = elementos.estado;
        tr.appendChild(tdEstado);
        tdEstado.setAttribute("class", "tdCreado");
        tdEstado.setAttribute("id","tdEstado");


        let tdPrioridad = document.createElement("td");
        tdPrioridad.textContent = elementos.prioridad;
        tr.appendChild(tdPrioridad);
        tdPrioridad.setAttribute("class", "tdCreado");
        tdPrioridad.setAttribute("id", "tdPrioridad");

        cuerpoTabla.appendChild(tr);

        boton.onclick = function () {
            Swal.fire({
                title: 'estas seguro que quieres borrarlo?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'si, borralo'
            }).then((result) => {
                if (result.isConfirmed) {
                    trBorrado(jsonElementos.data[index].id, this.parentElement);
                    // this.parentElement.remove();
                    //   Swal.fire(
                    //     'Borrado!',
                    //     'Tu elemento ha sido eliminado.',
                    //     'success'
                    //   )
                }
            })
        };
        editar.onclick = function () {
            update(this.closest("tr"), elementos);

        }
    });


    
    // editar.onclick = function (id){
    //     fetch("modifyElements.php",{
    //         method:"POST",
    //         body: id
    //     }).them(response => response.json()).them(response =>{
    //         TdModNombre_.value = response.tdNombre;
    //         idDescripcion.value = response.tdDescripcion;
    //         tdNumSerie.value = response.tdNumSerie;
    //         tdEstado.value = response.tdEstado;
    //         tdPrioridad.value = response.tdPrioridad;
    //     })
    // }
}


function trBorrado(id, fila) {
    fetch(URL_delete + id)
        .then(response => response.json())
        .then((respuestaJson) => {
            
            if (respuestaJson.success) {
                fila.remove();
                Swal.fire(
                    'Borrado!',
                    'Tu elemento ha sido eliminado.',
                    'success'
                )
            } else {
                Swal.fire(
                    'Erro al borrar!',
                    'Tu elemento no ha sido eliminado.',
                    'error'
                )
            }
        });
}




// const cuerpoTabla = document.querySelector("#cuerpoTabla");
// formulario.forEach(formulario => {

//     const tr = document.createElement("tr");
//     tr.setAttribute("id", "trCreado")//asi proporcionamos atributos a los elementos que se crean.

//     let boton = document.createElement("button");
//     boton.textContent = formulario.boton;
//     tr.appendChild(boton);
//     // boton.textContent = "X";
//     boton.setAttribute("id", "botonx");

//     let tdNombre = document.createElement("td");
//     tdNombre.textContent = cargarPersonajes();
//     tr.appendChild(tdNombre);
//     tdNombre.setAttribute("id", "nombre");
//     tdNombre.setAttribute("class", "tdCreado");

//     let tdDescripcion = document.createElement("td");
//     tdDescripcion.textContent = formulario.descripcion;
//     tr.appendChild(tdDescripcion);
//     tdDescripcion.setAttribute("class", "tdCreado");

//     let tdNumSerie = document.createElement("td");
//     tdNumSerie.textContent = formulario.numeroSerie;
//     tr.appendChild(tdNumSerie);
//     tdNumSerie.setAttribute("class", "tdCreado");

//     let tdEstado = document.createElement("td");
//     tdEstado.textContent = formulario.estado;
//     tr.appendChild(tdEstado);
//     tdEstado.setAttribute("class", "tdCreado");

//     let tdPrioridad = document.createElement("td");
//     tdPrioridad.textContent = formulario.prioridad;;
//     tr.appendChild(tdPrioridad);
//     tdPrioridad.setAttribute("class", "tdCreado");

//     cuerpoTabla.appendChild(tr);

//     boton.onclick = function () {
//         alert("Me voy a borrar")
//         this.parentElement.remove();//elimino el padre de $boton
//     };
// });

function filtro() {

    var input, filter, table, tr, td, i, txtValue, txtValue1;
    input = document.getElementById("filtrar");
    filter = input.value.toUpperCase();
    table = document.getElementById("cuerpoTabla");
    tr = table.getElementsByTagName("tr");
    //recorre el array empezando por la posicion 0 y 1 y busca coincidencias con lo escritio en el input.
    for (i = 0; i < tr.length; i++) {

        if (filter.length >= 3) {
            //crear otra variable una que recoja el 0 y otra que recoja el 1
            td = tr[i].getElementsByTagName("td")[0]; //cogemos los value de  nombre[0] y descripcion[1].
            td1 = tr[i].getElementsByTagName("td")[1];
            if (td && td1) {
                txtValue = td.textContent || td.innerText; // 
                txtValue1 = td1.textContent || td1.innerText;
                //pasamos a mayuscula el contenido para determinar las coincidencias con lo que le metemmos por input.
                if ((txtValue.toUpperCase().indexOf(filter) > -1) || (txtValue1.toUpperCase().indexOf(filter) > -1)) {
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

function ModNombreX(id)
{
console.log(id);
//const classID = document.getElementsById("TdModNombre");
//alert("ID "+id);
var valor_inicial = document.getElementById("TdModNombre_"+id).innerHTML;
//document.getElementById("TdModNombre_"+id).innerHTML = '<input type="text" value="'+valor_inicial+'">';
}/*
for (var i =0; i<= classID.length; i++){
    classID[i].addEventListener("dbclick",function(){
        
        alert("HOLA ID : ");   
    });
};
*/

// function update() {
//     //coger sleector y traer
//     const tds = document.querySelectorAll("tr");

//     for (td of tds) {
//         var manu = 0;
//         console.log('td: ' + (manu+1))
//         td.addEventListener("dblclick", function () {
//             console.log('Clickkk dani');
//             // crea un input con el valor de la celda
//             let input = document.createElement('input');
//             input.value = this.textContent;
//             //se ejecuta cuando el input pierde el foco
//             input.addEventListener("blur", function () {
//                 removeInput(this);
//             });

//             // evento que se ejecuta cada vez que se deja de pulsar una tecla
//             input.addEventListener("keydown", function (e) {
//                 // la tecla 13, es el Enter
//                 if (e.which == 13) {
//                     removeInput(this);
//                 }
//             });
//             // quito el contenido de la celda de la tabla
//             this.textContent = "";
//             // Pongo en la celda el input que hemos creado
//             this.appendChild(input);
//         });

//     }
// }

// function removeInput(e) {
//     e.parentElement.textContent = e.value;
// }


function update(row, data) {

//     <form id="form">
//     <div>NombreElemento: <input type="text" name="nombre" id="NombreElemento"></div>
//     <div>Descripcion: <input type=text id="desElemento" name="descripcion"></div>
//     <div>Num Serie: <input type=text id="numSerie" name="numero"></div>
//     <div><legend><b>Estado: Activar/desactivar</b></legend>
//         <input type="checkbox" id="chbox" value="Activo" name="estado"></div>
//     <div> <legend><b>Prioridad</b></legend>
//         <input type="radio" id="alta" name="prioridad" value="Alta">Alta
//         <input type="radio" id="media" name="prioridad" value="Media">Media
//         <input type="radio" id="baja" name="prioridad" value="Baja">Baja
//     </div>
//     <input type="submit" id="actualizar" value="actualizar"/>    
// </form>
// </div>


    

    let NombreElemento = document.getElementById('NombreElemento');
    NombreElemento.value = data.nombre;

    let desElemento = document.getElementById('desElemento');
    desElemento.value = data.descripcion;

    let numSerie = document.getElementById('numSerie');
    numSerie.value = data.nserie;

    let checkEstado = document.getElementById('checkbox');
    let pAlta = document.getElementById('alta');
    let pMedia = document.getElementById('media');
    let pBaja = document.getElementById('baja');
    let formulario = document.getElementById('formulario');
  
    if (data.estado==="Activo"){
        checkEstado.checked= true;
    }else{
        checkEstado.checked= false;
    }

    switch(data.prioridad){
        case "Alta": 
            pAlta.checked = true;
            pMedia.checked = false;
            pBaja.checked = false;
            break;
        case "Media":
            pMedia.checked = true;
            pAlta.checked = false;
            pBaja.checked = false;
            break;
        case "Baja":
            pBaja.checked = true;
            pAlta.checked = false;
            pMedia.checked = false;
            break;
        default:
            pAlta.checked = false;
            pMedia.checked = false;
            pBaja.checked = false;
            break;
    }
    formulario.addEventListener('submit', (e)=>{
        //impedimos que recargue la pagina
        e.preventDefault();

        row.cells[0].innerHTML= NombreElemento.value;
        row.cells[1].innerHTML= desElemento.value;
        row.cells[2].innerHTML= numSerie.value;

        if(checkEstado.checked===true){
            row.cells[3].innerHTML="Activo";
        }else{
            row.cells[3].innerHTML="Inactivo";
        }
        
        if(pAlta.checked===true){
            row.cells[4].innerHTML="Alta";
        }else if(pMedia.checked===true){
            row.cells[4].innerHTML="Media";
        }else if(pBaja.checked===true){
            row.cells[4].innerHTML="Baja";
        }
        

        let dataForm = new FormData(formulario);

        fetch(URL_Modify+data.id, {
            method: "POST",
            body: dataForm,
    
       }).then(()=> Swal.fire("elementos modificados", "", "success"));
    })    
}

document.getElementById("filtrar").addEventListener("keyup", filtro); //KeyUp ejecuta la funcion filtrar cuando se pulsa la tecla.
