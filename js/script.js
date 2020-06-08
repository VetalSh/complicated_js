let myVar = 266219;
console.log('Создаем переменную myVar: ', myVar);
console.log('Тип этой переменной: ', typeof myVar);

let myArr = myVar.toString().split('');
console.log('Разбиваем переменную на отдельные числа: ', myArr);

let mult = 1;
for (let i = 0; i < myArr.length; i++) {
  mult *= +myArr[i];
}
console.log('Умножаем числа между собой: ', mult);
mult **= 3;
console.log('Результат возводим в степень 3: ', mult);

let result = mult.toString();
console.log('Выводим на экран 2 первых цифры: ', result.slice(0, 2));
alert('первые 2 цифры полученного числа: ' + result.slice(0, 2));