//const numberOfFilms = +prompt("Сколько фильмов вы посмотрели ?");

//prerconalMovieDB = {
// count: numberOfFilms,
// movies:{},
// actors:{},
//  genrse:[],
//  privat: false
//};

//const a = prompt("Один из последних просмотренных фильмов ?"),
// b = prompt("Оцените его : "),
//c = prompt("Один из последних просмотренных фильмов ?"),
//d = prompt("Оцените его : ");

//prerconalMovieDB.movies[a] = b;
//prerconalMovieDB.movies[c] = d;

//console.log(prerconalMovieDB);


const numberOfFilms = +prompt("Сколько фильмов вы посмотрели ?");

prersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genrse: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
     const a = prompt("Один из последних просмотренных фильмов ?"," ");
     const b = prompt("Оцените его : "," ");
           
if (a != null && b != null && a != " " && b != " " && a.lenght < 50) {
        prersonalMovieDB[a] = b;
        console.log("Done");
    } else {
        console.log("Error");
        i--;
    }
}

if (prersonalMovieDB.count < 10) {
    console.log("Довольно мало фильмов");
} else if (prersonalMovieDB.count >= 10 && prerconalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (prersonalMovieDB.count > 30) {
    console.log("Вы киноман!");
} else {
    console.log("ошибка!");
}

console.log(prersonalMovieDB);