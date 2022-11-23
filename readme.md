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