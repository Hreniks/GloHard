const lang = prompt('Введите значение переменной lang');

if (lang === 'ru') console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
else if (lang === 'en') console.log("Monday, Tuesday, Wednsday, Thursday, Friday, Saturday, Sunday");
else alert('Неверное значение');

switch (lang)
{
    case 'ru': console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
    break;
    case 'en': console.log("Monday, Tuesday, Wednsday, Thursday, Friday, Saturday, Sunday");
    break;
    default: alert('Неверное значение');
}

const array = [
    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"]
];

lang === 'ru' ? console.log(array[0]) :
lang === 'en' ? console.log(array[1]) : 
console.log('Неверное значение');

const namePerson = prompt('Введите имя: ');

namePerson === 'Артем' ? console.log('директор') : 
namePerson === 'Максим' ? console.log('преподаватель') :
console.log('студент');
