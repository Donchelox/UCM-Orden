const tabla = document.querySelector('#lista-usuarios tbody');

function cargarUsuarios(){
    fetch('../ucm.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.identificador}</td>
                    <td>${usuario.movie}</td>
                    <td>${usuario.orden}</td>
                    <td>${usuario.status}</td>
                `;
                tabla.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();