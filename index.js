'use strict';

//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

const array1 = [4, -2, 5, 19, -130, 0, 10];

function findMinMaxValue () {
	let minVal = 0;
	let maxVal = 0;
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] >= maxVal) {
			maxVal = array1[i];
		}
		if (array1[i] <= minVal) {
			minVal = array1[i];
		}
	}
	return [minVal, maxVal];
}
console.log(findMinMaxValue());

//Дан массив arr. Найдите среднее арифметическое его элементов. 
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const array2 = [12, 15, 20, 25, 59, 79];

function getAvrValue() {
  let sum = 0;
  for (let i = 0; i < array2.length; i++) {
    sum += array2[i];
  };
  return sum / array2.length;
};

console.log(getAvrValue());