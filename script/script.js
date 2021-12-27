const numberOfFilms = +prompt("Сколько фильмов вы посмотрели ?");

prerconalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genrse:[],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов ?"),
      b = prompt("Оцените его : "),
      c = prompt("Один из последних просмотренных фильмов ?"),
      d = prompt("Оцените его : ");

prerconalMovieDB.movies[a] = b;
prerconalMovieDB.movies[c] = d;

console.log(prerconalMovieDB);






