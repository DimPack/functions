"use strict";

/*1) Написати функцію, яка приймає два значеня і повертає більше значення, якщо значення одного типу, в усіх інших випадках повертає null */

/**
 * 
 * @param {number} value1 
 * @param {number} value2 
 * @returns number || null
 */
function numbersOverCheck(value1, value2) {
    if(typeof(value1) === typeof(value2)) {
        return value1 > value2 ? value1 : value2
    } else {
        return null;
    }
};
numbersOverCheck(9, 54)

/*2) Написати функцію, яка просить користувача ввести число і виводить повідомлення яке він число ввів: "додатнє", "нуль" або "від'ємне", або виводить повідомлення "це не число" */

/**
 * 
 * @returns message (alert)
 */
function numberChecksAndReports() {
    let value = prompt('Введіть своє число: ');
    if(isNaN(value) || !value.trim() || value === '') {
        return alert('це не число');
    } else {
        if (value > 0) {
            alert("Додатнє");
        } else if (value < 0) {
            alert("від'ємне");
        } else {
            alert("Нуль");
        }
    }
}
numberChecksAndReports();

/*3) Написати функцію, яка приймає параметром число і перевіряє чи є це число дільником 100. Повертає булеве значення. */

/**
 * 
 * @param {number} value 
 * @returns boolean
 */
function numberDivisorHundred(value) {
    if(isNaN(value) || !value.trim() || value === ''|| value%100 !== 0) {
        return false
    } else {
        return true
    }
}
numberDivisorHundred('  dsdsdasd');
numberDivisorHundred('52+5');
numberDivisorHundred('');
numberDivisorHundred('    ');
numberDivisorHundred('200');
numberDivisorHundred('2556');

// 4) Написати функцію, яка перевіряє можливість існування трикутника.
// Функція приймає три числа - сторони трикутника, повертає булеве значення. Значення за замовчуванням 3,4,5.
// Трикутник існує тоді і тільки тоді, коли сума довжин будь-яких двох його сторін більша за третю.

/**
 * 
 * @param {number} side1 
 * @param {number} side2 
 * @param {number} side3 
 * @returns boolean
 */
function isTriangle(side1 = 3, side2 = 4, side3 = 5) {
    return(side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)
}
isTriangle();
isTriangle(8, 10, 14)

