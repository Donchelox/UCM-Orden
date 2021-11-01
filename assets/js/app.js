document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
    fetch('assets/ucm.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
    /*    let html = '';
        data.forEach(function(marvel) {
            html += `
                <li>${marvel.movie}</li>
            `;
        })
        document.getElementById('grid-movies').innerHTML = html;*/
        console.log(data);
    })
}