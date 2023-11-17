// let age = 18;

// for (let i = 1; i < 10; i++) {
//     if (i === 4) {
//         continue;
//     }
//     if (i === 5) {
//         continue;
//     }
//     if (i === 6) {
//         continue;
//     }
//     console.log(age);
//     age--;
// }


for (i = 0; i < 4; i++) {
    let question = +prompt(`Введіть число:`);
    console.log(`Крок ${i+1}: ${question};`)

    if (question <=0 || question > 0) {
        console.log('Number)))')
    } else {
        console.log('NaN(((')
    }
}