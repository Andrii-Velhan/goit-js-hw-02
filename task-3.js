'use strict';

function findLongestWord(string = '') {
  // Write code under this line
  //   console.log(string);
  let items = string.split(' ');
  let LongestWord = items[0];
  for (const item of items) {
    if (item.length > LongestWord.length) {
      LongestWord = item;
    }
  }

  return LongestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'

/*
Задача 2-3
Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), 
которая принимает параметром произвольную строку
(в строке будут только слова и пробелы) и возвращает
самое длинное слово в этой строке.
*/
