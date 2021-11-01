const marvelJSon = 'ucm.json';
const div = document.querySelector('#grid-movies');

function cargarMarvel(){
    fetch(marvelJSon)
    .then(respuesta => respuesta.json())
    .then(peliculas => {
        peliculas.forEach(movie => {
            const row = document.createElement('div');    
            row.innerHTML+= `
            <div class="card-movie" id="${movie.identificador}">
                <div class="card-content">
                    <div identificador="poster" onclick="ModalMarvel(this)" class="data-poster" >
                        <img class="poster-movie" src="assets/img/poster/${movie.identificador}.jpg" data-movie="${movie.movie}" data-phase="${movie.phase}">
                    </div>
                    <div class="card-body">
                        <h4>${movie.movie}</h4>
                        <div class="date-movie">
                        <span class="movie-year">${movie.year}</span><span class="status-${movie.status}"></span>
                        <a class="link d-none" href="${movie.streaming}" target="_blank">Ver en Streaming</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
            div.appendChild(row);
        });
    })
}
cargarMarvel();

function porFecha(){
    marvelJSon.sort(function(a, b){return a-b});
}

  function closeModal() {
    document.getElementById("overlay").classList.remove('active');
    document.querySelector("body").classList.remove('fixed');
  }
  function ModalMarvel(pelicula) {
    document.getElementById("overlay").classList.add('active');
    document.querySelector("body").classList.add('fixed');
    var titleModal = document.getElementById("modal-title");
    var phaseModal = document.getElementById("phase-modal");
    titleModal.innerHTML = pelicula.id;
  }