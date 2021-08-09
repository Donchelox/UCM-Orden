const marvelMovies = [
  {
    "id": "ironman",
    "movie": "Iron Man",
    "poster": "assets/img/poster/ironman.jpg",
    "status": "released",
    "year": 2008,
    "timeline": 2010,
    "type": "movie",
    "phase": 1
  },
  {
    "id": "theincrediblehulk",
    "movie": "The Incredible Hulk",
    "poster": "assets/img/poster/theincrediblehulk.jpg",
    "status": "released",
    "year": 2008,
    "timeline": 2011,
    "type": "movie",
    "phase": 1
  },
  {
    "id": "ironman2",
    "movie": "Iron Man 2",
    "poster": "assets/img/poster/ironman2.jpg",
    "status": "released",
    "year": 2010,
    "timeline": 2011,
    "type": "movie",
    "phase": 1
  },
  {
    "id": "thor",
    "movie": "Thor",
    "poster": "assets/img/poster/thor.jpg",
    "status": "released",
    "year": 2011,
    "timeline": 2011,
    "type": "movie",
    "phase": 1
  },
  {
    "id": "captainamericathefirstavenger",
    "movie": "Capitán América: el primer vengador",
    "poster": "assets/img/poster/captainamericathefirstavenger.jpg",
    "status": "released",
    "year": 2011,
    "timeline": 1943,
    "type": "movie",
    "phase": 1
  },
  {
    "id": "theavengers",
    "movie": "The Avengers",
    "poster": "assets/img/poster/theavengers.jpg",
    "status": "released",
    "year": 2012,
    "timeline": 2012,
    "type": "movie",
    "phase": 1
  },
  {
    "id": "ironman3",
    "movie": "Iron Man 3",
    "poster": "assets/img/poster/ironman3.jpg",
    "status": "released",
    "year": 2013,
    "timeline": 2012,
    "type": "movie",
    "phase": 1
  },
  {
    "id": "thorthedarkworld",
    "movie": "Thor: The Dark World",
    "poster": "assets/img/poster/thorthedarkworld.jpg",
    "status": "released",
    "year": 2013,
    "timeline": 2013,
    "type": "movie",
    "phase": null
  },
  {
    "id": "captainamericathewintersoldier",
    "movie": "Captain America: The Winter Soldier",
    "poster": "assets/img/poster/captainamericathewintersoldier.jpg",
    "status": "released",
    "year": 2014,
    "timeline": 2014,
    "type": "movie",
    "phase": null
  },
  {
    "id": "guardiansofthegalaxy",
    "movie": "Guardianes de la Galaxia",
    "poster": "assets/img/poster/guardiansofthegalaxy.jpg",
    "status": "released",
    "year": 2014,
    "timeline": 2014,
    "type": "movie",
    "phase": null
  },
  {
    "id": "avengersageofultron",
    "movie": "Avengers: Age of Ultron",
    "poster": "assets/img/poster/avengersageofultron.jpg",
    "status": "released",
    "year": 2015,
    "timeline": 2015,
    "type": "movie",
    "phase": null
  },
  {
    "id": "ant-man",
    "movie": "Ant-Man",
    "poster": "assets/img/poster/ant-man.jpg",
    "status": "released",
    "year": 2015,
    "timeline": 2015,
    "type": "movie",
    "phase": null
  },
  {
    "id": "captainamericacivilwar",
    "movie": "Capitán América: Civil War",
    "poster": "assets/img/poster/captainamericacivilwar.jpg",
    "status": "released",
    "year": 2016,
    "timeline": 2016,
    "type": "movie",
    "phase": null
  },
  {
    "id": "doctorstrange",
    "movie": "Doctor Strange",
    "poster": "assets/img/poster/doctorstrange.jpg",
    "status": "released",
    "year": 2016,
    "timeline": 2016,
    "type": "movie",
    "phase": null
  },
  {
    "id": "guardiansofthegalaxyvol2",
    "movie": "Guardianes de la Galaxia Vol. 2",
    "poster": "assets/img/poster/guardiansofthegalaxyvol2.jpg",
    "status": "released",
    "year": 2017,
    "timeline": 2014,
    "type": "movie",
    "phase": null
  },
  {
    "id": "spider-manhomecoming",
    "movie": "Spider-Man: Homecoming",
    "poster": "assets/img/poster/spider-manhomecoming.jpg",
    "status": "released",
    "year": 2017,
    "timeline": 2016,
    "type": "movie",
    "phase": null
  },
  {
    "id": "thorragnarok",
    "movie": "Thor: Ragnarok",
    "poster": "assets/img/poster/thorragnarok.jpg",
    "status": "released",
    "year": 2018,
    "timeline": 2017,
    "type": "movie",
    "phase": null
  },
  {
    "id": "blackpanther",
    "movie": "Black Panther",
    "poster": "assets/img/poster/blackpanther.jpg",
    "status": "released",
    "year": 2018,
    "timeline": 2017,
    "type": "movie",
    "phase": null
  },
  {
    "id": "avengersinfinitywar",
    "movie": "Avengers: Infinity War",
    "poster": "assets/img/poster/avengersinfinitywar.jpg",
    "status": "released",
    "year": 2018,
    "timeline": 2018,
    "type": "movie",
    "phase": null
  },
  {
    "id": "ant-manthewasp",
    "movie": "Ant-Man and the Wasp",
    "poster": "assets/img/poster/ant-manthewasp.jpg",
    "status": "released",
    "year": 2018,
    "timeline": 2018,
    "type": "movie",
    "phase": null
  },
  {
    "id": "captainmarvel",
    "movie": "Capitana Marvel",
    "poster": "assets/img/poster/captainmarvel.jpg",
    "status": "released",
    "year": 2019,
    "timeline": 1995,
    "type": "movie",
    "phase": null
  },
  {
    "id": "avengersendgame",
    "movie": "Avengers: Endgame",
    "poster": "assets/img/poster/avengersendgame.jpg",
    "status": "released",
    "year": 2019,
    "timeline": 2023,
    "type": "movie",
    "phase": null
  },
  {
    "id": "spider-manfarfromhome",
    "movie": "Spider-Man: Lejos de casa",
    "poster": "assets/img/poster/spider-manfarfromhome.jpg",
    "status": "released",
    "year": 2019,
    "timeline": 2023,
    "type": "movie",
    "phase": null
  },
  {
    "id": "blackwidow",
    "movie": "Black Widow",
    "poster": "assets/img/poster/blackwidow.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2017,
    "type": "movie",
    "phase": null
  },
  {
    "id": "shangchi",
    "movie": "Shang-Chi and the Legend of the Ten Rings",
    "poster": "assets/img/poster/shangchi.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "type": "movie",
    "phase": null
  },
  {
    "id": "eternals",
    "movie": "Eternals",
    "poster": "assets/img/poster/eternals.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "type": "movie",
    "phase": null
  },
  {
    "id": "spider-mannowayhome",
    "movie": "Spider-man No way home",
    "poster": "assets/img/poster/spider-mannowayhome.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "type": "movie",
    "phase": null
  },
  {
    "id": "doctorstrangeinthemultiverseofmadness",
    "movie": "Doctor Strange in the Multiverse of Madness",
    "poster": "assets/img/poster/doctorstrangeinthemultiverseofmadness.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2025,
    "type": "movie",
    "phase": null
  },
  {
    "id": "thorloveandthunder",
    "movie": "Thor Love and Thunder",
    "poster": "assets/img/poster/thorloveandthunder.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2025,
    "type": "movie",
    "phase": null
  },
  {
    "id": "blackpantherwakandaforever",
    "movie": "Black Panther Wakanda Forever",
    "poster": "assets/img/poster/blackpantherwakandaforever.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2025,
    "type": "movie",
    "phase": null
  },
  {
    "id": "themarvels",
    "movie": "The Marvels",
    "poster": "assets/img/poster/themarvels.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2025,
    "type": "movie",
    "phase": null
  },
  {
    "id": "blade",
    "movie": "Blade",
    "poster": "assets/img/poster/blade.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "type": "movie",
    "phase": null
  },
  {
    "id": "ant-manquantunmania",
    "movie": "Ant-Man and The Wasp: Quantumania",
    "poster": "assets/img/poster/ant-manquantunmania.jpg",
    "status": "coming",
    "year": 2023,
    "timeline": 2025,
    "type": "movie",
    "phase": null
  },
  {
    "id": "fantasticfour",
    "movie": "Fantastic Four",
    "poster": "assets/img/poster/fantasticfour.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "type": "movie",
    "phase": null
  },
  {
    "id": "wandavision",
    "movie": "WandaVision",
    "poster": "assets/img/poster/wandavision.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2023,
    "type": "serie",
    "phase": null
  },
  {
    "id": "thefalconandthewintersoldier",
    "movie": "The Falcon and the Winter Soldier",
    "poster": "assets/img/poster/thefalconandthewintersoldier.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2023,
    "type": "serie",
    "phase": null
  },
  {
    "id": "loki",
    "movie": "Loki",
    "poster": "assets/img/poster/loki.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2012,
    "type": "serie",
    "phase": null
  },
  {
    "id": "whatif",
    "movie": "What If...?",
    "poster": "assets/img/poster/whatif.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "type": "serie",
    "phase": null
  },
  {
    "id": "hawkeye",
    "movie": "Hawkeye",
    "poster": "assets/img/poster/hawkeye.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "type": "serie",
    "phase": null
  },
  {
    "id": "msmarvel",
    "movie": "Ms. Marvel",
    "poster": "assets/img/poster/msmarvel.jpg",
    "status": "coming",
    "year": 2021,
    "timeline": 2024,
    "type": "serie",
    "phase": null
  },
  {
    "id": "shehulk",
    "movie": "She Hulk",
    "poster": "assets/img/poster/shehulk.jpg",
    "status": "announced",
    "year": 2021,
    "timeline": 2024,
    "type": "serie",
    "phase": null
  },
  {
    "id": "moonknight",
    "movie": "Moon Knight",
    "poster": "assets/img/poster/moonknight.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "type": "serie",
    "phase": null
  },
  {
    "id": "secretinvasion",
    "movie": "Secret Invasion",
    "poster": "assets/img/poster/secretinvasion.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "type": "serie",
    "phase": null
  },
  {
    "id": "ironheart",
    "movie": "Ironheart",
    "poster": "assets/img/poster/ironheart.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "type": "serie",
    "phase": null
  },
  {
    "id": "armorwars",
    "movie": "Armor Wars",
    "poster": "assets/img/poster/armorwars.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "type": "serie",
    "phase": null
  },
  {
    "id": "gotg-holiday",
    "movie": "The Guardians of the Galaxy Holiday Special",
    "poster": "assets/img/poster/gotg-holiday.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2025,
    "type": "serie",
    "phase": null
  },
  {
    "id": "iamgroot",
    "movie": "I Am Groot",
    "poster": "assets/img/poster/I Am Groot.jpg",
    "status": "announced",
    "year": 2025,
    "timeline": 2025,
    "type": "serie",
    "phase": null
  }
];
  
displayMovies();
  
function dateReleased() {
    marvelMovies.sort(function(a, b){return a.year - b.year});
    displayMovies();
    document.getElementById("title-section").innerHTML = "Fecha de estreno";
}

function timelineOrder() {
    marvelMovies.sort(function(a, b){return a.timeline - b.timeline});
    displayMovies();
    document.getElementById("title-section").innerHTML = "Orden cronológico";
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
            <figure class="poster">
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