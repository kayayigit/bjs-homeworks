function getResult(a,b,c){
    "use strict";
    let D = (b**2) - (4 * a * c);
    let firstRoot = (-b + Math.sqrt(D)) / (2 * a);
    let secondRoot = (-b - Math.sqrt(D)) / (2 * a);
    if (D > 0) {
        return [firstRoot, secondRoot]
    } else if (D === 0) {
        return [firstRoot];
    } else {
        return[];
    }
}

function getAverageMark(marks){
 
    marks.splice (5);
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let averageMark = sum / marks.length;

    if (marks.length === 0) {
        return 0;
    } else {
        return averageMark;
    }

}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let birthYear = dateOfBirthday.getFullYear();
    const messageForOld = `Не желаете ли олд-фэшн, ${name}?`;
    const messageForYoung = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    let today = new Date ();
    let currentYear = today.getFullYear();
    if ((currentYear - birthYear) > 18) {
        return messageForOld;
    } else {
        return messageForYoung;
    }
}