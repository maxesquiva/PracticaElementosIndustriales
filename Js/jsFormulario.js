const formulario = [{
    // poner los elementos en minusculas 
    nombreElemento: "detector de humos",
    descripcion: "Los sensores de humo son capaces de detectar el humo de un lugar a tiempo",
    numeroSerie: 1582,
    estado: true,
    prioridad: "Alta"

}, {
    nombreElemento: "Medidor de presión",
    descripcion: "Los sensores medidores de presión son muy utilizados en el sector agrícola para conocer",
    numeroSerie: 1582,
    estado: true,
    prioridad: "Media"
}, {
    nombreElemento: "Control de la humedad",
    descripcion: "Permiten tener controlados factores como el clima o el almacenamiento de productos perecederos",
    numeroSerie: 1756,
    estado: false,
    prioridad: "Baja"
}
];

const cuerpoTabla = document.querySelector("#cuerpoTabla");
formulario.forEach(formulario => {

    const tr = document.createElement("tr");
    tr.setAttribute("id", "trCreado")//asi proporcionamos atributos a los elementos que se crean.

    let boton = document.createElement("button");
    boton.textContent = formulario.boton;
    tr.appendChild(boton);
    // boton.textContent = "X";
    boton.setAttribute("id", "botonx");

    let tdNombre = document.createElement("td");
    tdNombre.textContent = formulario.nombreElemento;
    tr.appendChild(tdNombre);
    tdNombre.setAttribute("id", "nombre");
    tdNombre.setAttribute("class", "tdCreado");

    let tdDescripcion = document.createElement("td");
    tdDescripcion.textContent = formulario.descripcion;
    tr.appendChild(tdDescripcion);
    tdDescripcion.setAttribute("class", "tdCreado");

    let tdNumSerie = document.createElement("td");
    tdNumSerie.textContent = formulario.numeroSerie;
    tr.appendChild(tdNumSerie);
    tdNumSerie.setAttribute("class", "tdCreado");

    let tdEstado = document.createElement("td");
    tdEstado.textContent = formulario.estado;
    tr.appendChild(tdEstado);
    tdEstado.setAttribute("class", "tdCreado");

    let tdPrioridad = document.createElement("td");
    tdPrioridad.textContent = formulario.prioridad;;
    tr.appendChild(tdPrioridad);
    tdPrioridad.setAttribute("class", "tdCreado");

    cuerpoTabla.appendChild(tr);

    boton.onclick = function () {
        alert("Me voy a borrar")
        this.parentElement.remove();//elimino el padre de $boton
    };
});

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
                if ((txtValue.toUpperCase().indexOf(filter) > -1) || (txtValue1.toUpperCase().indexOf(filter)> -1)) {
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

const tds=document.querySelectorAll("td");

for(td of tds) {
    td.addEventListener("dblclick",function() {
        // crea un input con el valor de la celda
        let input=document.createElement('input');
        input.value=this.textContent;
        //se ejecuta cuando el input pierde el foco
        input.addEventListener("blur",function() {
            removeInput(this);
        });

        // evento que se ejecuta cada vez que se deja de pulsar una tecla
        input.addEventListener("keydown",function(e) {
            // la tecla 13, es el Enter
            if(e.which==13) {
                removeInput(this);
            }
        });
        // quito el contenido de la celda de la tabla
        this.textContent="";
        // Pongo en la celda el input que hemos creado
        this.appendChild(input);
    });
    function removeInput(e) {
        e.parentElement.textContent=e.value;
    }
}

document.getElementById("filtrar").addEventListener("keyup", filtro); //KeyUp ejecuta la funcion filtrar cuando se pulsa la tecla.
