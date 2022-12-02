"use strict"; 
/*Операторы в js */
/*+ и конкотинация строк -------------------------------------- */
console.log("arr" + "- object"); /*сложение двух строк */
console.log(4 + "- object"); /*число + строка = строка */
console.log(4 + +"5"); /*число + строка (с унарным плюсом ) = 9 число*/
/*унапный плюс - плюс ставится перед аргументом */

/*инкримент и дикримент ------------------------------------------ */
/*существуют для укорочения кода. Уменьшают или увеличивают число на 1  */
/*часто на собеседовании спрашивают, чем отличается префиксная форма от постфиксной */

let incr = 10,
   decr = 10; /*формат записи, череззапятую */

/*incr++; /*постфиксная запись */
/*decr--;*/
/*++incr; /*префиксная запись
--decr;  */
/*console.log(incr++); /*11 */
/*console.log(decr--); /*9 */

/*Использование постфиксной записи console.log(incr++); как и 
console.log(decr--); 
Выдает нам значение изначально заданной переменной. т.е. ничего не вычетает и не складывает

и только префиксная запись в console.log(++incr); влияет на ответ */

/*Остаток от процента -------------------------- */
console.log(5 % 2); /*1 остаток в ответе  */

/*Если одно равно "=" то это присваивание*/
/*Если нам нужно что сравнить, то следует использовать равно дважды "==" */
console.log(2 * 4 == 8); /*true */
console.log(2 * 4 == "8"); /*true */
console.log(2 * 4 === "8"); /*false  так как равенство строгое*/

/*операторы И &&, ИЛИ || ---------------------------------------*/
const isChecked = true,
   isClose = true;
/*console.log(isChecked && isClose); /*true, а если одно из значений false то и ответ false  */
/* !!!оператор && возвращает true если оба значения true/ 
Точно так же и на большем количестве переменных*/

/*const isCheckeds = false,
   isCloses = true;
console.log(isCheckeds || isCloses);  /*true||false = true */

/*оператор ОТРИЦАНИЯ ! ------------------------------- */
/*КОГДА НУЖНО ОБРАТИТЬ FALSE В TRUE */

const isCheckeds = false,
   isCloses = false;
console.log(isCheckeds || !isCloses); /*Равено true так как использовал !false  */

/*порядок выполнения операторов --------------------------------- */

console.log(2+2*2 === 8); /* false так 6 не 8  */
/*что бы знать о преорите работы операторв. Смотри таблицу преоритетов  */
/*самые приоритетные вверху расположены */
console.log(2 + 2 * 2 != 8);  /*true так как 6 НЕ равно 8*/
/*!== - строгое стравнение по типу */
console.log(2 + 2 * 2 != "6"); /* false так как число 6 и строка равны 6*/
console.log(2 + 2 * 2 !== "6"); /*true  число супротив строки / ПО ТИПУ */






