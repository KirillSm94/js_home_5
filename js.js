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
    console.log(qq);
    console.log(array);
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
    //что то пошло не так при 1,10,4

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

