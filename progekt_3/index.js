//1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.

//tack_1

let result = 1;
let arr = [2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log (result);

let i = 0;
while (i < arr.length) {
    result *= arr[i];
    i++;
}
console.log(result);

// Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані
//

//tack_2

for (let i = 0; i <= 15; i++) 
{
alert(i % 2 !== 0 ? i +  " is odd " : i + " is even " );
 };

 //Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

 //tack_3


 let array = [];
 function randArray(k) {
				 min = 1; max = 500;
				 for (let i = 1; i <= k; i += 1) {
				 array.push(Math.floor(Math.random() * (max - min +1) + min));
		 }
		 return array;
		 }
		 console.log(randArray(7));

		 //Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

		 //tack_4

		 function raiseToDegree (a = +prompt("Enter a"), b = +prompt("Enter b")) 
		 {
			if (a > 0 && b > 0) 
			{
					return console.log(a ** b)
			}
			return new Error()
	}
	raiseToDegree ();

	//Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення.Порада: для розв’язку можете скористатися спеціальним масивом arguments.Sample Output: findMin(12, 14, 4, -4, 0.2);//=>-4

	//tack_5

let res = 0;
function findMin() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < res) {
            res = arguments[i];
        }
    }
    return res;
}
findMin(12, 14, 4, -4, 0.2);
console.log(res);

//Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
/*Sample Output:
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true*/

//task_6

function findUnique(arr)
 {
	new Set(arr).size === arr.length ? console.log(true) : console.log(false);
}
findUnique([1, 2, 3, 5, 3]);  
findUnique([1, 2, 3, 5, 11]); 

/*Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.

Sample Output:
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]*/

//tack_7

function lastElem(arr, interval) {
	if (interval=== undefined) {
			return arr[arr.length - 1];
	} else {
			return arr.slice(-interval);
	};
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));

/*. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

Input string: 'i love java script' 
Output string: 'I Love Java Script'

*/

//tack_8

function capitalize(str) {
	if (!str) return str;
	return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
console.log(capitalize("i love java script"));