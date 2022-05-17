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
    "phase": "1",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "1",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "1",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "1",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "1",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "1",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "2",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "2",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "2",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "2",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "2",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "2",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "3",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
  },
  {
    "id": "shangchi",
    "movie": "Shang-Chi and the Legend of the Ten Rings",
    "poster": "assets/img/poster/shangchi.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2024,
    "orden": 29,
    "type": "movie",
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
  },
  {
    "id": "eternals",
    "movie": "Eternals",
    "poster": "assets/img/poster/eternals.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2024,
    "orden": 60,
    "type": "movie",
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
  },
  {
    "id": "spider-mannowayhome",
    "movie": "Spider-man No Way Home",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2024,
    "orden": 60,
    "type": "movie",
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
  },
  {
    "id": "hawkeye",
    "movie": "Hawkeye",
    "poster": "assets/img/poster/hawkeye.jpg",
    "status": "released",
    "year": 2021,
    "timeline": 2024,
    "orden": 60,
    "type": "serie",
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
  },
  {
    "id": "msmarvel",
    "movie": "Ms. Marvel",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/msmarvel_lob_crd_04.jpg",
    "status": "coming",
    "year": 2022,
    "timeline": 2024,
    "orden": 60,
    "type": "serie",
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
  },
  {
    "id": "moonknight",
    "movie": "Moon Knight",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/moonknight_lob_crd_05.jpg",
    "status": "announced",
    "year": 2022,
    "timeline": 2025,
    "orden": 60,
    "type": "serie",
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "5",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
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
    "phase": "4",
    "urltrailer": "8ugaeA-nMTc",
    "streaming": "https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
  }
];
  
displayMovies();
  
function dateReleased() {
    marvelMovies.sort(function(a, b){return a.year - b.year});
    displayMovies();
    document.getElementById("title-section").innerHTML = "Fecha de estreno";
    document.getElementById("released").classList.add('active');
}

function timelineOrder() {
    marvelMovies.sort(function(a, b){return a.orden - b.orden});
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
      <div class="card-movie" id="${movie.id}" onclick="ModalMarvel(this)" data-phase="${movie.phase}">
        <div class="card-content">
            <div id="poster" class="data-poster" data-movie="${movie.movie}" data-phase="${movie.phase}">
                <img class="poster-movie" src="assets/img/poster/${movie.id}.jpg">
            </div>
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

    function moviesModalTemplate(movie) {
      return `
      <div id="data-movie-modal" class="${movie.id}">
            <div class="info">
              <h3 class="data-title-movie">${movie.movie}</h3>
              <div class="data-date-released">${movie.year}</div>
              <div class="data-status-production">${movie.status}</div>
            </div>
            <div class="data-ucm">
              <div class="data-ucm-phase">Fase ${movie.phase}</div>
              <div class="data-ucm-date">${movie.timeline}</div>
              <div class="data-ucm-streaming"><a href="${movie.streaming}" target="_blank">Ver en Streaming</a></div>
            </div>
            <div class="data-"></div>
            <div class="data-">
              <h5>Trailer</h5>
              <div class="data-ucm-streaming"><a href="https://www.youtube.com/watch?v=${movie.urltrailer}">Ver trailer</a></div>
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
    document.getElementById("overlay").classList.remove('active');
    document.querySelector("body").classList.remove('fixed');
  }
  function ModalMarvel(pelicula) {
    document.getElementById("overlay").classList.add('active');
    document.querySelector("body").classList.add('fixed');
    var titleModal = document.getElementById("modal-title");
    var phaseModal = document.getElementById("phase-modal");
    titleModal.innerHTML = pelicula.id;
    phaseModal.innerHTML = pelicula.data-phase;
  }

/*  function dataElement(){
    document.getElementById("poster").addEventListener("click", function(){
      console.log(this.getAttribute('data-type'));
    });
  }

  var el = document.getElementsByClassName("data-poster");

  for(var i= 0; i< el.length; i++){
  el[i].addEventListener("click", function (event) {     
   var div = document.createElement('div');
   for (var key in this.dataset) {
  
     var obj = this.dataset[key];
  
     var elem = document.getElementById('modal-content');
     var span = document.createElement('span');

     document.getElementById("overlay").classList. add('active');
    document.querySelector("body").classList. add('fixed');
  
     div.appendChild(span);
     div.className = "modal-content";
  
     span.innerHTML = "data[" + key + "] = " + obj + "&nbsp;&nbsp;&nbsp;";
     span.className = "movie";
     elem.appendChild(div);
     document.getElementById("modal-content").removeChild(document.getElementById("movie").children[0].lastChild);

  }
  }); 
  }*/

  document.querySelectorAll('div.data-poster').forEach( elem => {
    elem.addEventListener('click', e => {
      console.log(e.target.dataset.phase);
    });
  });

// CAMBIO DE ESTADO BOTONES
  // Get the container element
var btnContainer = document.getElementById("sort-buttons");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// https://www.youtube.com/watch?v=DP7Hkr2ss_I