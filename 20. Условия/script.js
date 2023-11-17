if (4 == 5) {
    console.log('ok');
} else {
    console.log('Error');
}

const num = 222;

if (num < 49) {
    console.log('Error')
} else if (num > 100) {
    console.log('Mnogo')
} else {
    console.log('ok');
}

// Тернарний оператор в його роботі приймають участь
// аж 3 аргументи
const num1 = 50;
(num1 === 50) ? console.log('ok') : console.log('Error');

//  Бінарний
// 4 + 4

//  Унарний
// + '4'

const num2 = 2;

// Switch(case) - проверить можно только на строгое сравнение
switch (num2) {
    case 49:
        console.log('Неверно');
        break;
    case 100:   
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;   
    default:
        console.log('Не в етот раз');
        break;     
}