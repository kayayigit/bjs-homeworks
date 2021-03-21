"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // let parsePercent = parseFloat(percent);
    // let monthlyPercent = parsePercent / 12 / 100;
    // let parseContribution = parseFloat(contribution);
    // let parseAmount = parseFloat(amount);
    
    // let credit = parseAmount - parseContribution;
    
    // function monthsDiff() {
    //     let creditEndDate = new Date(date);
    //     let currentDate = new Date();
    //     let months = (creditEndDate.getFullYear() - currentDate.getFullYear()) * 12;
    //     months -= currentDate.getMonth();
    //     months += creditEndDate.getMonth();
    //     return months;
    // }

    // let mountlyPayment = credit * (monthlyPercent +  monthlyPercent / (((1 + monthlyPercent) ** monthsDiff()) - 1));
    // let totalAmount = ((mountlyPayment * monthsDiff()));
    
    // console.log(totalAmount.toFixed(2));
    // return Number(totalAmount.toFixed(2));
    

    let monthlyPercent = percent / 12 / 100;
    let credit = amount - contribution;
    
    let creditEndDate = new Date(date);
    let currentDate = new Date();
    let monthsDiff = ((creditEndDate.getFullYear() - currentDate.getFullYear()) * 12) - currentDate.getMonth() + creditEndDate.getMonth();

    let mountlyPayment = credit * (monthlyPercent +  monthlyPercent / (((1 + monthlyPercent) ** monthsDiff) - 1));
    let totalAmount = (mountlyPayment * monthsDiff);
    
    if ((typeof percent || contribution || amount) == "string") {
        console.log("Не правильный тип данных входа");
    } else if ((percent || contribution || amount) < 0) {
        console.log("вы ввели отрицательное значение входа");
    } else if ((percent || contribution || amount) == "") {
        console.log("отсутствует значение входа");
    } else {
        console.log(totalAmount.toFixed(2));
        return Number(totalAmount.toFixed(2));
    };

    // return totalAmount;
}

function getGreeting(name) {

    // let greetingsAnonim = "Привет, мир! Меня зовут Аноним.";
    // let greetingsUser = `Привет, мир! Меня зовут ${name}.`;
    // let greeting;
    // if (name == null) {
    //     greeting = greetingsAnonim;
    //     console.log(greetingsAnonim);
    // } else if (name == "") {
    //     greeting = greetingsAnonim;
    //     console.log(greetingsAnonim);
    // } else {
    //     greeting = greetingsUser;
    //     console.log(greetingsUser);
    // }
    // return greeting;
    let name;
    let greeting = `Привет, мир! Меня зовут ${name}.`;
    if (name == null || "") {
        name === "Аноним";
    };
    console.log(greeting);
    return greeting;
}