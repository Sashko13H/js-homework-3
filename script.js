// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];
// let frutsNew = fruts.map((fruts) => fruts.name);
// console.log(frutsNew);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let num = 2; num < 11; num++){
//     if (num % 2 === 1) continue;
//     console.log(num);
// }

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }
//
// let i = 0; 
// while (i < 5) {
//     console.log( `цифра ${i}!` );
//     i++;
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// let num;
// while (true) {
//     num = prompt("Введіть число більше 100");
//     if (num > 100) {
//       alert(`Ви ввели число: ${num}`);
//       break;
//     } else {
//       alert("Введіть число більше 100");
//     }
// }    

// -- 5 --
// Вирахуйте середній вік //20.5
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];
// let aa = girls.map((item) => item.age);
// let ages = aa.reduce((summ, item) => summ + item) / girls.length;
// console.log(ages); 