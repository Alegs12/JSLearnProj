let numbersOfFilms;

function start() {
  numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (
    numbersOfFilms == "" ||
    numbersOfFilms == null ||
    isNaN(numbersOfFilms)
  ) {
    numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms(params) {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (
      a != null &&
      b != null &&
      a != "" &&
      b != "" &&
      a.length < 50 &&
      b.length < 50
    ) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("Error");
      i--;
    }
  }
}
rememberMyFilms();

// let i = 1; //? - то же самое, но через While
// while (i < 3) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");

//   if (
//     a != null &&
//     b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50 &&
//     b.length < 50
//   ) {
//     personalMovieDB.movies[a] = b;
//     i++;
//   }
// }

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Вы просмотрели довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

// function showMyDB() { //? - мой вариант
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB);
//   }
// }

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i} по порядку?`
    );
  }
}

writeYourGenres();
showMyDB(personalMovieDB.privat);
// console.log(personalMovieDB);
