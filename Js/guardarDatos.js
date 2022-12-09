function guardar() {
    // let guardar = document.getElementById("Guardar");

    fetch("./ws/createElement2.php", {
        method: "POST",
        body: new FormData(document.getElementById("frm"))
    }).then(response => response.json())
        .then((respuestaJson) => {

            if (respuestaJson.success) {

                Swal.fire(
                    'Guardado!',
                    'Tu elemento ha sido guardado.',
                    'success'
                )
            } else {
                Swal.fire(
                    'Erro al guardar!',
                    'Tu elemento no ha sido guardado.',
                    'error'
                )
            }
        });

}

document.getElementById("frm").addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Estas seguro que quieres guardarlo?',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            guardar();
            //   Swal.fire('Guardado!', '', 'success')
        }
    })
});

