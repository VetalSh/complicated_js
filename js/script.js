'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let date = new Date();
// console.log('date: ', date);
// console.log('week: ', week);

week.forEach(function(item, i) {
  if (i === date.getDay()) {
    if (i === 0 || i === 6) {
      document.write(`<strong>${item.italics()}</strong><br>`);
    } else {
      document.write(`<strong>${item}</strong><br>`);
    }    
  } else {
    if (i === 0 || i === 6) {
      document.write(`${item.italics()}<br>`);
    } else {
      document.write(`${item}<br>`);
    }
  }    
});