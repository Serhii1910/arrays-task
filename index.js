'use strict';

//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

const array = [4, -2, 5, 19, -130, 0, 10];

function findMinMaxValue () {
	let minVal = 0;
	let maxVal = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] >= maxVal) {
			maxVal = array[i];
		}
		if (array[i] <= minVal) {
			minVal = array[i];
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

//Выведите на экран случайное целое число от 1 до 100.

function getRandomNum() {
	return Math.ceil(Math.random() * 100);
  }
  
  console.log(getRandomNum());

  //Заполните массив 10-ю случайными целыми числами. 

function randomNumArr() {
	const randomArr = [];
	let maxLimit = 100;
	let minLimit = -100;
	for (let i = 0; i < 10; i++) {
	  randomArr[i] = Math.floor(Math.random() * (maxLimit - minLimit + 1) + minLimit);
	}
	return randomArr;
  }
  
  console.log(randomNumArr());

  //1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr3);



//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const array4 = [1, 2, 3];
const reversArray = array4.reverse();

console.log(reversArray);



//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const array5 = [1, 2, 3];
const array6 = [4, 5, 6];
Array.prototype.push.apply(array5, array6);

console.log(array5);



//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const array7 = [1, 2, 3];
array5.unshift(4, 5, 6)

console.log(array7);



//5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

const array8 = ['js', 'css', 'jq'];

console.log(array8.shift());
console.log(array8);



//6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

const array9 = ['js', 'css', 'jq'];

console.log(array9.pop());
console.log(array9);



//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

const array10 = [1, 2, 3, 4, 5];
const array11 = array10.slice(0, 3);

console.log(array11);



//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const array12 = [1, 2, 3, 4, 5];
const array13 = array12.slice(3);

console.log(array13);



//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const array14 = [1, 2, 3, 4, 5];
const array15 = array14.splice(1, 2);

console.log(array14);



//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

const array16 = [1, 2, 3, 4, 5];
const array17 = array16.splice(1, 3);

console.log(array17);



//11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const array18 = [1, 2, 3, 4, 5];
const array19 = array18.splice(3, 0, 'a', 'b', 'c');

console.log(array18);



//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const array20 = [1, 2, 3, 4, 5];
const array21 = array20.splice(1, 0, 'a', 'b');
const array22 = array20.splice(6, 0, 'c');
const array23 = array20.splice(8, 0, 'e');

console.log(array20);



//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const array24 = [3, 4, 1, 2, 7];
const array25 = array24.sort();

console.log(array25);



//14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

const object = {
  js:'test', 
  jq: 'hello', 
  css: 'world'
};
const objectKeysArr = Object.keys(object);

console.log(objectKeysArr);



//1. необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, 
//и возвращать true, если строка есть в массиве, и false - если нет

function hasElem(array01, str01) {
  for (let i = 0; i < array01.length; i++) {
    if (array01[i] == str01) {
      return true;
    }
  }
  return false;
}

console.log(hasElem([0, 9, 87], '9'));



//2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. 
//Если есть - вернуть true, а если нет - вернуть false.

console.log(hasElem([0, 9, 87], 9));



//3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. 
//Если есть -  вернуть true, а если нет - вернуть false.

function hasRepeatedElem(array03) {
  for (let i = 0; i < array03.length; i++) {
    if (array03[i] === array03[i - 1]) {
      return true;
    }
  }
  return false;
}

console.log(hasRepeatedElem([0, 9, 7, 8, 1, 1, 2, 77, 0]));