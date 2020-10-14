'use strict';
function a(arg) {
    if (typeof(arg) !== 'string') return (console.log('Это не строка'));
    else {
        const str = arg.trim();
        if (arg.length > 30) console.log(str.slice(0,30) + '...');//здесь надо использовать replace?
    }
}

a('           абвгдеёжзийклмнопрстуфхцчшщъыьэюяйцуйцуйуц     ');