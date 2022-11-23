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