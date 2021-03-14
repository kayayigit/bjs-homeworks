"use strict";

//задача №1
function getSolutions(a,b,c){
    let D = (b**2) - (4 * a * c);

    if (D < 0) {
        return {D, roots: []};
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return {D, roots: [x1]};
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {D, roots: [x1, x2]};
    }
}

function showSolutionsMessage (a,b,c){
    let result = getSolutions();
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${D}`);
    if (D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${x1}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`);
    }
}

//задача №2
function getAvarageScore(data){
    // const data = {
    //     algebra: [],
    //     geometry: [],
    //     russian: [],
    //     physics: [],
    //     music: [],
    //     english: [],
    //     poetry: [],
    //     chemistry: [],
    //     french: []
    // };
    const average = getAverageMark(data);
    
    function getAverageMark(marks){
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
    };

    function outputData () {
        for (let prop in data) {
        let value = getAverageMark(data[prop]);
        console.log(`${prop}: ${value}`);
        console.log(average);
    };
};
        return outputData();
};

