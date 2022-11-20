fetch('nav.html')
    .then(response => response.text())
    .then((data) => {
        const navegador = document.getElementById("nav");
        navegador.innerHTML = data;
        colorIndex = document.getElementById('index');
        colorTable = document.getElementById('tabla');
        colorPag3 = document.getElementById('pagina3');
        colorPag4 = document.getElementById('pagina4');
        colorPag5 = document.getElementById('pagina5');
        ruta = 'http://localhost/DWES/PracticaElementosIndustriales/';

        ruta1= window.location.href;

        switch(ruta1){
            case ruta:
            case ruta+'index.html':
                colorIndex.style.backgroundColor = 'green';
                break;
            case ruta+'pagina2.html':
                colorTable.style.backgroundColor = 'blue';
                break;
            case ruta+'pagina3.html':
                colorPag3.style.backgroundColor = 'brown';
                break;
            case ruta+'pagina4.html':
                colorPag4.style.backgroundColor = 'yellow';
                break;
            case ruta+'pagina5.html':
                colorPag5.style.backgroundColor = 'red';
                break;
        }
    })