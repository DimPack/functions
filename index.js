/*Написати функцію, яка буде повертати об'єкт родина.
Ключ - член родини
Значення - ім'я
В родині повинно бути як мінімум 2 особи, можна запитати в користувача скільки особ в його родині.
І всі данні (і ключ і значення) вносяться через prompt

const family = {
  'mather':'Olena',
  'cat': 'Ray',
} */

/**
 * 
 * @param {number} value 
 * @returns boolean
 */
function validateNumberInput(value) {
    if (isNaN(value) || !value.trim() || value === '') {
        
        alert('Сталося помилка! Введено некоректні дані. Спробуй ще раз!');
        return false
    }
    return true; 
}
/**
 * 
 * @param {string} value 
 * @returns boolean
 */
function validateTextInput(value) {
    if (!isNaN(value) || !value.trim() || value === '') {

        alert('Сталося помилка! Введено некоректні дані. Спробуй ще раз!');
        return false
    }
    return true; 
}
/**
 * 
 * @returns object
 */
function userFamilyMembers() {
    const family = {};
    const minMembers = 2;

    while (true) {
        let sizeFamily = prompt('Із скількох осіб складається твоя сім\'я ? (мінімум два)');
        if (validateNumberInput(sizeFamily)) {
            if (parseInt(sizeFamily) >= minMembers) {
                for (let i = 0; i < sizeFamily; i++) {
                    let userMember = prompt(`Хто ${i+1} член сім'ї ?`);
                    let userName = prompt(`Як звати ${i+1} член сім'ї ?`);
                    if (validateTextInput(userMember) && validateTextInput(userName)) {
                        family[userMember] =  userName;
                    } else {
                        i--;
                    }
                }
                return family;
            }

        }

    }
}
userFamilyMembers();