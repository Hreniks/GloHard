const lang = prompt('Введите значение переменной lang');
const array = [
    ["ru", ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]],
    ["en", ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"]]
];
const Week = [
   ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"]];


if (lang === 'ru') console.log(Week[0]);
else if (lang === 'en') console.log(Week[1]);
else alert('Неверное значение');

switch (lang)
{
    case 'ru': console.log(Week[0]);
    break;
    case 'en': console.log(Week[1]);
    break;
    default: alert('Неверное значение');
}




// lang === 'ru' ? console.log(array[0]) :
// lang === 'en' ? console.log(array[1]) : 
// console.log('Неверное значение');

let map = new Map(array);
console.log(map.get(lang));


const namePerson = prompt('Введите имя: ');

namePerson === 'Артем' ? console.log('директор') : 
namePerson === 'Максим' ? console.log('преподаватель') : 
console.log('студент');
