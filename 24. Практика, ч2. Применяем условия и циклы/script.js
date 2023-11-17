const numberOfFilms = +prompt(`Сколько фильмов ві уже посмотрели?`);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt(`Один из последних просмотренных фильмов?`),
          b = prompt(`На сколько оценете его?`);
    if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length <50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        i--;
        console.log('Error');
        alert(`Ви ввели слово ${a} & ${b} воно велике`)
    }      
          
}

if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
    console.log(`Просмотрено довольно мало фильмов ${personalMovieDB.count}`)
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    console.log(`Вы классический зритель ${personalMovieDB.count}`)
} else if (personalMovieDB.count >=30) {
    console.log(`Вы киноман ${personalMovieDB.count}`)
} else {console.log(`Произошла ошибка ${personalMovieDB.count}`)}

console.log(personalMovieDB);


// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/