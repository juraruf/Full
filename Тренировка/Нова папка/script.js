let num = +prompt('Введіть число:');

// if (num <0) {
//     console.log(`Число ${num} меньше 0`);
// } else if(num >=0 && num <=50) {
//     console.log(`Число ${num} від 0 до 50`);
// } else if (num > 50) {
//     console.log(`Число ${num} більше 50`);
// }

(num <0) ? console.log(`Число ${num} меньше 0`) : 
(num >=0 && num <=50) ? console.log(`Число ${num} від 0 до 50`) :
(num > 50) ? console.log(`Число ${num} більше 50`) : console.log(`Good`);