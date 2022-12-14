# Основы программирования на JavaScript

### Задание 1.1
Выведите в консоль фразу Привет, мир!

```javascript
console.log("Привет, мир!");
```
### Задание 2.1
Создайте переменную year_of_foundation со значением 1841.

```javascript
let year_of_foundation = 1841;
```
### Задание 3.2
В программе заданы две переменные name и last_name, которые хранят имя и фамилию соответственно. Посчитайте общую длину имени и фамилии и выведите ее в консоль. Обратите внимание: в имени и фамилии по бокам могут быть пробельные символы — их считать не надо.

```javascript
console.log((name.trim() + last_name.trim()).length);
```

### Задание 3.3

В программе задана переменная word со строковым значением. Выведите в консоль первую букву значения в верхнем регистре.

```javascript
console.log(word[0].toUpperCase());
```

### Задание 3.4

В программе задана переменная value, в которую записано дробное число. Выполните следующие операции:

- округлите значение переменной "вверх" до целого значения;
- округлите значение переменной "вниз" до целого значения;
- округлите значение переменной по правилам математики до целого значения;
- посчитайте сумму полученных выше значений и из результата возьмите корень квадратный;
- из результата возьмите целую часть числа и выведите в консоль.

```javascript
console.log(Math.trunc(Math.sqrt(Math.ceil(value) + Math.floor(value) + Math.round(value))));
```

### Задание 3.5

В программе заданы две переменные a и b с числовыми значениями. Выведите в консоль произведение значений этих переменных, возведенное в квадрат.

```javascript
console.log(Math.pow((a * b), 2));
```

### Задание 3.6

В программе заданы две переменные a и b с числовыми значениями. Посчитайте длину гипотенузы в прямоугольном треугольнике, если значения a и b являются длинами катетов. Результат выведите в консоль.

```javascript
console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
```

### Задание 3.7

В программе задана переменная obj, в которую записан объект со свойствами name, last_name и age, в которых хранятся имя, фамилия и возраст пользователя соответственно. Сформируйте строку по примеру и выведите ее в консоль. Обратите внимание, что имя и фамилию требуется заключить в различные виды кавычек.

```javascript
console.log(`Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`);
```

### Задание 3.8

В программе заданы три переменные name, last_name, age, в которых хранятся имя, фамилия и возраст пользователя соответственно. Сформируйте объект с ключами name, last_name, age и значениями из соответствующих переменных. Выведите этот объект в консоль.

```javascript
let obj = {name: name, last_name: last_name, age: age};
console.log(obj);
```

### Задание 3.9

В программе задана переменная value. Выведите в консоль ее тип. Не забудьте, что функция typeof со значением аргумента null выдает неправильный результат. При значении null необходимо вывести "null".

```javascript
if (value === null) {
    console.log("null");
  }
  else {
    console.log(typeof(value));
  }
```

### Задание 4.1

В программе задана переменная speed с числовым значением. Реализуйте программу, которая в зависимости от условия выполняет следующее действие:

- если значение от 0 до 30 включительно, выведите строку Вы едете слишком медленно;
- если значение от 31 до 70 включительно, выведите строку Вы едете с нормальной скоростью;
- в ином случае выведите Вы едете слишком быстро, сбавьте скорость

```javascript
if (speed >=0 && speed <= 30) {
    console.log("Вы едете слишком медленно");
  }
  else if (speed > 30 && speed <= 70){
    console.log('Вы едете с нормальной скоростью');
  }
  else{
    console.log("Вы едете слишком быстро, сбавьте скорость");
  }
```

### Задание 4.2

В программе объявлена переменная price, в которой хранится строка со значением цены. Переведите значение переменной в число (parseInt) и в зависимости от полученного значения выполните следующее действие:

- если записанное значение оказалось не числом, выведите в консоль сообщение Не число;
- если число равно 0 или является отрицательным, выведите в консоль сообщение Число не корректное;
- в ином случае выведите в консоль значение числа.

```javascript
if (isNaN(parseInt(price))){
    console.log("Не число");
  }
  else if (parseInt(price) <= 0){
    console.log("Число не корректное");
  }
  else {
    console.log(parseInt(price));
  }
```

### Задание 4.3

В программе объявлены три переменные a, b и c, в которые записаны числовые значения. Определите максимальное значение и выведите его в консоль, но помните: методом max пользоваться нельзя.

```javascript
if (a > b && a > c){
    console.log(a)
  }
  else if (b > a && b > c){
    console.log(b)
  }
  else{
    console.log(c);
  }
```

### Задание 4.4

В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу:
- если значение переменной temp больше либо равно 25, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf";
- если значение переменной temp от 10 до 24, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "bowling";
- в ином случае значение переменной activity должно быть "hiking".

```javascript
if (temp >= 25 && weather == "clear"){
    activity = "golf";
  }
  else if (temp >= 10 && temp <= 24 && weather == "clear"){
    activity = "bowling";
  }
  else {
    activity = "hiking"
  }
```

### Задание 4.5

В программе определены две переменные со строковым значением word_1 и word_2. Допишите программу таким образом, чтобы в консоль выводилась строка наибольшей длины.

```javascript
console.log(word_1.length > word_2.length ? word_1 : word_2);
```

### Задание 4.6

В программе объявлена переменная task, в которой записано одно из строковых значений: удалить, переименовать, редактировать. Напишите программу, которая выводит в консоль:

- delete – при значении task – удалить;
- rename – при значении task – переименовать;
- edit – при значении task – редактировать.

```javascript
switch (task) {
    case "удалить":
      console.log('delete');
      break;
    case "переименовать":
      console.log('rename');
      break;
    case "редактировать":
      console.log('edit');
      break;
  }
```

### Задание 4.7

В программе объявлены две переменные — price и range. Переменная range может принимать одно из трех строковых значений — month/day/week. Переменная price хранит в себе числовое значение. Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону:

<значение price> Р в <эквивалент значения range на русском языке>

```javascript
switch (range) {
    case "day":
      console.log(`${price} Р в день`);
      break;
    case "week":
      console.log(`${price} Р в неделю`);
      break;
    case "month":
      console.log(`${price} Р в месяц`);
      break;
  }
```

### Задание 4.8

В программе объявлены три переменные — a, b и sign. В переменных a и b хранятся числовые значения. В переменную sign записано строковое значение одного из математических операторов +, -, /, *. Напишите простой калькулятор, который в зависимости от значения переменной sign будет совершать соответствующие математические операции с переменными a и b. Результат необходимо выводить в консоль. Гарантируется, что переменная b не равна нулю.

```javascript
switch (sign) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
  }
```

### Задание 4.9

Необходимо доработать решение из задания 4.8

В дополнение к заданию 4.8 необходимо правильно обработать случай деления на 0. При попытке поделить на 0 программа должна выводить в консоль сообщение: Делить на 0 нельзя!.

```javascript
switch (sign) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      if (b != 0){
              console.log(a / b);
          break;
      }
      else {
      console.log("Делить на 0 нельзя!")}
  }
```

### Задание 6.1

В программе объявлена переменная price, в которую записано числовое значение. Напишите функцию priceMessage(), которая выводит в консоль сообщение "Данный товар стоит X рублей", где вместо X указано значение переменной price. Вызовите функцию после ее определения.

```javascript
function priceMessage(x) {
    console.log(`Данный товар стоит ${x} рублей`);
  }
  
  priceMessage(price);
```

### Задание 6.2

В программе объявлены две переменные с числовым значением — num_1 и num_2. Напишите функцию mult, которая принимает два аргумента и возвращает их произведение. Вызовите функцию mult и передайте ей в качестве аргументов значения переменных num_1 и num_2, а результат выведите в консоль.

```javascript
function mult(oneNum, twoNum){
    return oneNum*twoNum
  }
  
  console.log(mult(num_1, num_2))
```

### Задание 6.3

В программе объявлена переменная num, в которую записано числовое значение. Напишите функцию square(), которая возвращает квадрат этого числового значения. Обратите внимание, что функция обращается к глобальной переменной, а не получает значение в качестве аргумента.

```javascript
const square = () => num * num;
```

### Задание 6.4

В программе объявлена переменная num, в которой записано числовое значение. Используя цикл, возведите значение переменной в квадрат три раза. Каждый результат конкатенируйте через пробел и выведите в консоль.

```javascript
let i = 3;
let str = "";
while (i) {
  num = num * num;
  str += num + " ";
  i--;
}

console.log(str.trim())
```

### Задание 6.5

В программе объявлена переменная data, в которой записано строковое значение. Напишите функцию getNumber(data), которая преобразовывает строку в число по следующему правилу:

- если переменная data содержит не число, функция должна вернуть численное значение 0;
- если переменная data содержит число, например "123", то функция возвращает числовое значение 123.

Вызовите эту функцию и выведите результат в консоль.

```javascript
const getNumber = (data) => isNaN(parseInt(data)) ? 0 : parseInt(data);
console.log(getNumber(data))
```

### Задание 6.6

В программе объявлены две переменные — value и total, в которых записаны числовые значения. Напишите функцию getPercent(value, total), которая возвращает процент числа value от значения total. Вызовите эту функцию с value и total в качестве аргументов. Результат работы функции выведите в консоль.

```javascript
const getPercent = (firstNum, secondNum) => firstNum / secondNum * 100;
console.log(getPercent(value, total))
```

### Задание 9.1

В программе объявлена переменная list, представляющая массив значений. Используя методы массивов, выполните следующие действия:

- добавьте в начало массива новый элемент со значением Яблоко;
- удалите последний элемент массива;
- добавьте в конец массива новый элемент со значением Клубника.
- После выполнения всех перечисленных действий выведите значение переменной list в консоль.

```javascript
list.unshift("Яблоко");
list.pop();
list.push("Клубника")

console.log(list)
```

### Задание 9.2

В программе объявлена переменная list, в которую записан массив из строковых значений. Посчитайте и выведите в консоль элемент с максимальной длиной. Если элементов с такой длиной несколько, выведите первый.

```javascript
let count = 0;
let word = "";
for (let item of list){
  if (item.length>count){
    count = item.length;
    word = item;
  }
  
}
console.log(word);
```

### Задание 9.3

В программе объявлена переменная list, которая содержит массив чисел. Используя цикл, посчитайте сумму чисел и выведите в консоль.

```javascript
let sum = 0;
for (num of list){
  sum += num;
}

console.log(sum)
```

### Задание 9.4

В программе объявлены две переменные — list_1 и list_2, в каждой из которых хранится массив из чисел. Объедините два массива в один и каждое значение возведите в квадрат. Результат выведите в консоль.

```javascript
list_3 = []

for (num of list_2){
  list_1.push(num)
}

for (num of list_1){
  list_3.push(num*num); 
}

console.log(list_3)
```

### Задание 9.5

В программе объявлена переменная list, в которую записан массив из положительных и отрицательных числовых значений. Используя цикл, посчитайте сумму положительных чисел и выведите результат в консоль.

```javascript
sum = 0;

for (num of list){
  if (num >= 0){
    sum += num;
  }
}

console.log(sum)
```

### Задание 9.6

В программе объявлена переменная list, в которую записан массив числовых значений от 1 до 100. Используя цикл, сформируйте сумму из простых чисел этого диапазона и выведите результат в консоль.

```javascript
sum = 0;

for (let i = 2; i < list.length; i++) {
   let flag = true;
   
   for (let j = 2; j < i; j++) {
      if (list[i] % j == 0) {
         flag = false;
         break;
      }
   }

   if (flag) {
      sum += list[i];
   }
}

console.log(sum)
```

### Задание 9.7

В программе объявлена переменная list, в которую записан массив из числовых значений. Рассчитайте произведение максимального и минимального элементов массива. Результат выведите в консоль.

```javascript
let max = 0;

for (num of list) {
  if (num > max){
    max = num;
  }
}

let min = max;

for(num of list){
  if (num < min){
    min = num
  }
}

console.log(min*max)
```

### Задание 9.8

В программе объявлена переменная list, в которую записан массив из числовых значений. Напишите программу, которая переворачивает массив list и выводит результат в консоль. Метод массива reverse() использовать нельзя.

```javascript
let reversList = [];

for (num of list){
  reversList.unshift(num)
}

console.log(reversList)
```

### Задание 9.9

В программе объявлена переменная sentence со строковым значением. Преобразуйте эту строку в массив так, чтобы каждое слово было отдельным элементом массива. Результат выведите в консоль.

Метод строки split() использовать нельзя.

```javascript
function SentenceToWords(sentence){
    words = [];
    word = "";
    for (char of sentence){
    if(char != " "){
      word = word.concat(char)
    }
    else{
      words.push(word)
      word = "";
    }
  }
  words.push(word)
  return words
  }
  
  console.log(SentenceToWords(sentence))
```

### Задание 9.10

В программе объявлена переменная list, в которую записан массив из числовых значений. Напишите функцию count(list), которая принимает массив в качестве аргумента и возвращает количество четных элементов в массиве. Вызовите функцию count(list) и в качестве аргумента передайте ей список list. Выведите в консоль то, что вернет функция.

```javascript
function Count(list){
    count = 0;
    
    for(num of list){
      if (num % 2 == 0) {count++}
    }
    return count
  }
  
console.log(Count(list))
```

### Задание 9.11

В программе объявлена переменная list, в которую записан массив из числовых значений. Гарантируется, что массив не пустой. Реализуйте функцию average(list), которая принимает в качестве аргумента массив, рассчитывает среднее значение элементов массива, округляет получившееся значение по правилам математики и получившееся значение возвращает. Вызовите функцию average(list) и в качестве аргумента передайте список list. То, что функция вернет, необходимо вывести в консоль.

```javascript
function average(list){
    let sum = 0;
    
    for(num of list){
      sum += num
    }
    return Math.round(sum / list.length)
  }
  
  console.log(average(list))
```

### Задание 9.12

В программе объявлена переменная list, в которой записан массив из чисел и логических значений. Используя цикл, посчитайте сумму числовых значений до первого логического значения. Дойдя до логического значения, остановите цикл. Результат выведите в консоль.

```javascript
sum = 0;
for(let i = 0; i < list.length && typeof(list[i]) !== "boolean"; i++){
    sum += list[i]
}

console.log(sum)
```

### Задание 9.13

Используя цикл, сформируйте массив list со значениями от 10 до 20. Выведите значение переменной list в консоль.

```javascript
list = [];

for(let i = 10; i <= 20; i++){
  list.push(i)
}

console.log(list)
```

### Задание 9.14

В программе объявлена переменная list, в которую записан массив. Используя цикл, сформируйте массив numbers_list, который содержит в себе только числа из массива list. Если в процессе прохода циклом по массиву list обнаружится значение false, последующие значения рассматривать не нужно. В конце программы выведите значение переменной numbers_list в консоль.

```javascript
let numbers_list = [];

for(let i = 0; i < list.length && list[i] !== false; i++){
    if ((typeof list[i]) == "number"){
        numbers_list.push(list[i])
    }
}

console.log(numbers_list)
```

### Задание 9.15

В программе объявлена переменная list, в которой записан массив из строковых значений. Напишите программу, которая считает количество элементов в массиве list без учета элементов со значением "default" и выводит результат в консоль. Сравнение должно быть регистронезависимым.

```javascript
function countWords(list){
    let count = 0;
    for (value of list){
        if (value.toLowerCase() !== "default"){
            count += 1;
        }
    }
    return count
}

console.log(countWords(list))
```

### Задание 9.16

В программе объявлена переменная list, в которую записан массив из строковых значений. Сформируйте строку из первых букв каждого элемента массива и выведите ее в консоль. Гарантируется, что каждый элемент массива не нулевой длины.

```javascript
let str = "";

for (word of list){
    str = str.concat(word[0])
}

console.log(str)
```

### Задание 9.17

В программе объявлена переменная obj, содержащая объект с подобным набором значений:
```
{
        "Яблоко": "фрукт",
        "Арбуз": "ягода",
        "Помидор": "овощ",
        "Огурец": "овощ",
        "Вишня": "ягода"
}
```
Напишите скрипт, который формирует новый объект со значениями и их количеством. Выведите новый объект в консоль.

```javascript
fruits = Object.values(obj);
const countFruits = {};

for(fruit of fruits){
    countFruits[fruit] = countFruits[fruit] ? countFruits[fruit] + 1 : 1;
}

console.log(countFruits)
```

### Задание 9.18

В программе объявлена переменная list, в которую записан массив из объектов. В каждом объекте записаны название продукта и его стоимость.

Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько, выведите название первого из них.

```javascript
function ExpProd(list){
    price = 0;
    prod = ""
    for (item of list){
        if(item.price > price){
            price = item.price;
            prod = item.product;
        }
}
return(prod)
}

console.log(ExpProd(list))
```