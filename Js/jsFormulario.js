
const URL = './ws/getElement.php';
const URL_delete = './ws/deleteElement.php/?id=';
const nombre_URL = './ws/getElement.php/data/nombre';
const URL_Modify = './ws/modifyElements.php/?id=';


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
                }
            })
        };
        editar.onclick = function () {
            update(this.closest("tr"), elementos);

        }
    });

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


function update(row, data) {
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
