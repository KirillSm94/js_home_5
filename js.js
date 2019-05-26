'use strict';

console.log('Первая задача:');

let arrayOne = prompt('Введите первый массив в формате 1,2,3....,n'),
    arrayTwo = prompt('Введите второй массив в формате 1,2,3....,n'),
    one,
    two;

one = arrayOne.split(',');
two = arrayTwo.split(',');

for (let m = 0; m < one.length; m++) {
    one[m] = parseInt(one[m]);
}

for (let k = 0; k < two.length; k++) {
    two[k] = parseInt(two[k]);
}

console.log(one);
console.log(two);

let result;

result = function (x, y) {
    if (x.length !== y.length) {
        return false;
    } else {
        let count = 0;
        for (let i = 0; i < x.length; i++) {
            for (let j = 0; j < y.length; j++) {
                if (x[i] === y[i]) {
                    count++;
                    console.log(count);
                    break;
                }
            }
        }
        if (count === x.length) {
            return true;
        } else {
            return false;
        }
    }
};


console.log(result(one,two));
//----------------------------------------------------------------------------------------------------------------------

console.log('Вторая задача:');
let oneAr = prompt('Введите параметры range через запятую');

let arOne = oneAr.split(','),
    paramOne = parseInt(arOne[0]),
    paramTwo = parseInt(arOne[1]),
    paramThree = parseInt(arOne[2]);


if (paramThree === undefined || isNaN(paramThree) || null) {
    paramThree = undefined;
}
let array = [];

let range = function (a, b, c) {
    if (c === undefined) {
        c = 1;
    }
    for (let n = 0; a + c - 1 <= b ; a += c) {
        array[n] = a;
        n++;
    }
    let qq = b - array[array.length - 1];
    //console.log(qq);
    //console.log(array);
    if (qq >= c) {
        console.log(c);
        if (qq > c) {
            array.push(array[array.length -1] + c);
        }
        array.push(b);
    }
    if (array[array.length -1] - array[array.length -2] < c) {
        array.pop();
    }
    console.log(array);
    //что то пошло не так при 1,10,4 пришлось извернуться костылями

};


range(paramOne, paramTwo, paramThree);

//----------------------------------------------------------------------------------------------------------------------

console.log('Третья задача:');

let student = {};

student.hobby = ['Что-то, что-то, что-то'];
student.name = 'Кто-то';
student.surName = 'Какая-то';
student.age = 999;
student.study = 'Где-то';

let who = function (student) {
    console.log(`Имя - ${student.name}`);
    console.log(`Фамилия - ${student.surName}`);
    console.log(`Возраст - ${student.age}`);
    console.log(`Хобби - ${student.hobby}`);
    console.log(`Место учебы - ${student.study}`);
};

who(student);

//----------------------------------------------------------------------------------------------------------------------
console.log('Четвертая задача');

// Написать генератор случайных “слов”.
// Сформировать слово используя правила:
//      - определить длину слова случайно, но в диапазоне от 3 до 5 букв;
//      - начинать слово с гласной или согласной (определить случайно);
//      - чередовать гласные и согласные буквы в слове;
//      - буквы выбираются случайно.

let lengthWord,
    firstSymbolGlassArr,
    firstSymbolSogArr,
    firstSymbolSog,
    firstSymbolGlass,
    random;

random = function (min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};

lengthWord = random(3,5);

firstSymbolGlassArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
firstSymbolSogArr = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'щ'];


firstSymbolSog = firstSymbolSogArr[random(0,firstSymbolSogArr.length - 1)];
firstSymbolGlass = firstSymbolGlassArr[random(0, firstSymbolGlassArr.length -1)];
let word = [];

if (random(0,1) === 1) {
    for (let i = 1; i < lengthWord; i++) {
        word[0] = firstSymbolGlass;
        word[i] = firstSymbolSogArr[random(0, firstSymbolSogArr.length -1)];
        for (let j = 2; j < lengthWord; j = j + 2) {
            word[j] = firstSymbolGlassArr[random(0, firstSymbolGlassArr.length -1)];
        }
    }
} else {
    for (let i = 1; i < lengthWord; i++) {
        word[0] = firstSymbolSog;
        word[i] = firstSymbolGlassArr[random(0, firstSymbolGlassArr.length -1)];
        for (let j = 2; j < lengthWord; j = j + 2) {
            word[j] = firstSymbolSogArr[random(0, firstSymbolSogArr.length -1)];
        }
    }
}

let wordStr = word.join('');
//console.log(word);
console.log(wordStr);
//console.log(firstSymbolGlass);
//console.log(firstSymbolSog);
//console.log(lengthWord);
