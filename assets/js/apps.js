const marvelMovies = [
  {
    "id": "ironman",
    "movie": "Iron Man",
    "poster": "assets/img/poster/ironman.jpg",
    "status": "released",
    "year": 2008,
    "timeline": 2010,
    "orden": 3,
    "type": "movie",
    "phase": "1"
  },
  {
    "id": "theincrediblehulk",
    "movie": "The Incredible Hulk",
    "poster": "assets/img/poster/theincrediblehulk.jpg",
    "status": "released",
    "year": 2008,
    "timeline": 2011,
    "orden": 4,
    "type": "movie",
    "phase": "1"
  },
  {
    "id": "ironman2",
    "movie": "Iron Man 2",
    "poster": "assets/img/poster/ironman2.jpg",
    "status": "released",
    "year": 2010,
    "timeline": 2011,
    "orden": 5,
    "type": "movie",
    "phase": "1"
  },
  {
    "id": "thor",
    "movie": "Thor",
    "poster": "assets/img/poster/thor.jpg",
    "status": "released",
    "year": 2011,
    "timeline": 2011,
    "orden": 6,
    "type": "movie",
    "phase": "1"
  },
  {
    "id": "captainamericathefirstavenger",
    "movie": "Capitán América: el primer vengador",
    "poster": "assets/img/poster/captainamericathefirstavenger.jpg",
    "status": "released",
    "year": 2011,
    "timeline": 1943,
    "orden": 1,
    "type": "movie",
    "phase": "1"
  },
  {
    "id": "theavengers",
    "movie": "The Avengers",
    "poster": "assets/img/poster/theavengers.jpg",
    "status": "released",
    "year": 2012,
    "timeline": 2012,
    "orden": 7,
    "type": "movie",
    "phase": "1"
  },
  {
    "id": "ironman3",
    "movie": "Iron Man 3",
    "poster": "assets/img/poster/ironman3.jpg",
    "status": "released",
    "year": 2013,
    "timeline": 2012,
    "orden": 9,
    "type": "movie",
    "phase": "2"
  },
  {
    "id": "thorthedarkworld",
    "movie": "Thor: The Dark World",
    "poster": "assets/img/poster/thorthedarkworld.jpg",
    "status": "released",
    "year": 2013,
    "timeline": 2013,
    "orden": 8,
    "type": "movie",
    "phase": "2"
  },
  {
    "id": "captainamericathewintersoldier",
    "movie": "Captain America: The Winter Soldier",
    "poster": "assets/img/poster/captainamericathewintersoldier.jpg",
    "status": "released",
    "year": 2014,
    "timeline": 2014,
    "orden": 10,
    "type": "movie",
    "phase": "2"
  },
  {
    "id": "guardiansofthegalaxy",
    "movie": "Guardianes de la Galaxia",
    "poster": "assets/img/poster/guardiansofthegalaxy.jpg",
    "status": "released",
    "year": 2014,
    "timeline": 2014,
    "orden": 11,
    "type": "movie",
    "phase": "2"
  },
  {
    "id": "avengersageofultron",
    "movie": "Avengers: Age of Ultron",
    "poster": "assets/img/poster/avengersageofultron.jpg",
    "status": "released",
    "year": 2015,
    "timeline": 2015,
    "orden": 13,
    "type": "movie",
    "phase": "2"
  },
  {
    "id": "ant-man",
    "movie": "Ant-Man",
    "poster": "assets/img/poster/ant-man.jpg",
    "status": "released",
    "year": 2015,
    "timeline": 2015,
    "orden": 14,
    "type": "movie",
    "phase": "2"
  },
  {
    "id": "captainamericacivilwar",
    "movie": "Capitán América: Civil War",
    "poster": "assets/img/poster/captainamericacivilwar.jpg",
    "status": "released",
    "year": 2016,
    "timeline": 2016,
    "orden": 15,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "doctorstrange",
    "movie": "Doctor Strange",
    "poster": "assets/img/poster/doctorstrange.jpg",
    "status": "released",
    "year": 2016,
    "timeline": 2016,
    "orden": 19,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "guardiansofthegalaxyvol2",
    "movie": "Guardianes de la Galaxia Vol. 2",
    "poster": "assets/img/poster/guardiansofthegalaxyvol2.jpg",
    "status": "released",
    "year": 2017,
    "timeline": 2014,
    "orden": 12,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "spider-manhomecoming",
    "movie": "Spider-Man: Homecoming",
    "poster": "assets/img/poster/spider-manhomecoming.jpg",
    "status": "released",
    "year": 2017,
    "timeline": 2016,
    "orden": 18,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "thorragnarok",
    "movie": "Thor: Ragnarok",
    "poster": "assets/img/poster/thorragnarok.jpg",
    "status": "released",
    "year": 2018,
    "timeline": 2017,
    "orden": 20,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "blackpanther",
    "movie": "Black Panther",
    "poster": "assets/img/poster/blackpanther.jpg",
    "status": "released",
    "year": 2018,
    "timeline": 2017,
    "orden": 17,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "avengersinfinitywar",
    "movie": "Avengers: Infinity War",
    "poster": "assets/img/poster/avengersinfinitywar.jpg",
    "status": "released",
    "year": 2018,
    "timeline": 2018,
    "orden": 22,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "ant-manthewasp",
    "movie": "Ant-Man and the Wasp",
    "poster": "assets/img/poster/ant-manthewasp.jpg",
    "status": "released",
    "year": 2018,
    "timeline": 2018,
    "orden": 21,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "captainmarvel",
    "movie": "Capitana Marvel",
    "poster": "assets/img/poster/captainmarvel.jpg",
    "status": "released",
    "year": 2019,
    "timeline": 1995,
    "orden": 2,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "avengersendgame",
    "movie": "Avengers: Endgame",
    "poster": "assets/img/poster/avengersendgame.jpg",
    "status": "released",
    "year": 2019,
    "timeline": 2023,
    "orden": 23,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "spider-manfarfromhome",
    "movie": "Spider-Man: Lejos de casa",
    "poster": "assets/img/poster/spider-manfarfromhome.jpg",
    "status": "released",
    "year": 2019,
    "timeline": 2023,
    "orden": 28,
    "type": "movie",
    "phase": "3"
  },
  {
    "id": "blackwidow",
    "movie": "Black Widow",
    "poster": "assets/img/poster/blackwidow.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2017,
    "orden": 16,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "shangchi",
    "movie": "Shang-Chi and the Legend of the Ten Rings",
    "poster": "assets/img/poster/shangchi.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "orden": 29,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "eternals",
    "movie": "Eternals",
    "poster": "assets/img/poster/eternals.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "orden": 60,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "spider-mannowayhome",
    "movie": "Spider-man No way home",
    "poster": "assets/img/poster/spider-mannowayhome.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "orden": 60,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "doctorstrangeinthemultiverseofmadness",
    "movie": "Doctor Strange in the Multiverse of Madness",
    "poster": "assets/img/poster/doctorstrangeinthemultiverseofmadness.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2025,
    "orden": 60,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "thorloveandthunder",
    "movie": "Thor Love and Thunder",
    "poster": "assets/img/poster/thorloveandthunder.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2025,
    "orden": 60,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "blackpantherwakandaforever",
    "movie": "Black Panther Wakanda Forever",
    "poster": "assets/img/poster/blackpantherwakandaforever.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2025,
    "orden": 60,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "themarvels",
    "movie": "The Marvels",
    "poster": "assets/img/poster/themarvels.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2025,
    "orden": 60,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "guardiansofthegalaxyvol3",
    "movie": "Guardianes de la Galaxia Vol. 3",
    "poster": "assets/img/poster/guardiansofthegalaxyvol3.png",
    "status": "coming",
    "year": 2023,
    "timeline": 2025,
    "orden": 60,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "blade",
    "movie": "Blade",
    "poster": "assets/img/poster/blade.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "orden": 60,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "ant-manquantunmania",
    "movie": "Ant-Man and The Wasp: Quantumania",
    "poster": "assets/img/poster/ant-manquantunmania.jpg",
    "status": "coming",
    "year": 2023,
    "timeline": 2025,
    "orden": 60,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "fantasticfour",
    "movie": "Fantastic Four",
    "poster": "assets/img/poster/fantasticfour.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "orden": 60,
    "type": "movie",
    "phase": "4"
  },
  {
    "id": "wandavision",
    "movie": "WandaVision",
    "poster": "assets/img/poster/wandavision.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2023,
    "orden": 26,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "thefalconandthewintersoldier",
    "movie": "The Falcon and the Winter Soldier",
    "poster": "assets/img/poster/thefalconandthewintersoldier.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2023,
    "orden": 27,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "loki",
    "movie": "Loki",
    "poster": "assets/img/poster/loki.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2012,
    "orden": 24,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "whatif",
    "movie": "What If...?",
    "poster": "assets/img/poster/whatif.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2023,
    "orden": 25,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "hawkeye",
    "movie": "Hawkeye",
    "poster": "assets/img/poster/hawkeye.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "orden": 60,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "msmarvel",
    "movie": "Ms. Marvel",
    "poster": "assets/img/poster/msmarvel.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "orden": 60,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "shehulk",
    "movie": "She Hulk",
    "poster": "assets/img/poster/shehulk.jpg",
    "status": "announced",
    "year": 2021,
    "timeline": 2024,
    "orden": 60,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "moonknight",
    "movie": "Moon Knight",
    "poster": "assets/img/poster/moonknight.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "orden": 60,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "secretinvasion",
    "movie": "Secret Invasion",
    "poster": "assets/img/poster/secretinvasion.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "orden": 60,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "ironheart",
    "movie": "Ironheart",
    "poster": "assets/img/poster/ironheart.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "orden": 60,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "armorwars",
    "movie": "Armor Wars",
    "poster": "assets/img/poster/armorwars.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "orden": 60,
    "type": "serie",
    "phase": "4"
  },
  {
    "id": "gotg-holiday",
    "movie": "The Guardians of the Galaxy Holiday Special",
    "poster": "assets/img/poster/gotg-holiday.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2025,
    "orden": 60,
    "type": "serie",
    "phase": "5"
  },
  {
    "id": "iamgroot",
    "movie": "I Am Groot",
    "poster": "assets/img/poster/iamgroot.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "orden": 60,
    "type": "serie",
    "phase": "4"
  }
];
  
displayMovies();
  
function dateReleased() {
    marvelMovies.sort(function(a, b){return a.year - b.year});
    displayMovies();
    document.getElementById("title-section").innerHTML = "Fecha de estreno";
}

function timelineOrder() {
    marvelMovies.sort(function(a, b){return a.orden - b.orden});
    displayMovies();
    document.getElementById("title-section").innerHTML = "Orden cronológico";
    document.querySelectorAll(".timeline").classList.add('active');
}
  
  function alfabetico() {
    marvelMovies.sort(function(a, b){
      let x = a.movie.toLowerCase();
      let y = b.movie.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    displayMovies();
    document.getElementById("title-section").innerHTML = "Orden alfabético";
  }
  
  function moviesTemplate(movie) {
      return `
      <div class="card-movie ${movie.id}">
        <div class="card-content">
            <figure id="poster" onclick="${movie.id}Modal()" data-movie="${movie.movie}" data-phase="${movie.phase}">
                <img class="poster-movie" src="assets/img/poster/${movie.id}.jpg">
            </figure>
            <div class="card-body">
                <h4>${movie.movie}</h4>
                <div class="date-movie">
                <span class="movie-year">${movie.year}</span><span class="status-${movie.status}"></span>
                </div>
            </div>
        </div>
        </div>
      `;
    }
  
  function displayMovies() {
    document.getElementById("grid-movies").innerHTML =
    `
      ${marvelMovies.map(moviesTemplate).join("")}
    `;
    document.getElementById("title-section").innerHTML = "Fecha de estreno";
  }
  function closeModal() {
    document.getElementById("overlay").classList. add('active');
  }
  function captainmarvelModal() {
    document.getElementById("overlay").classList. add('active');
    document.querySelector("body").classList. add('fixed');
    document.getElementById('poster').getAttribute("data-phase")
  }