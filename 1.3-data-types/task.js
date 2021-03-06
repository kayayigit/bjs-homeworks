"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let parsePercent = parseFloat(percent);
    let parseContribution = parseFloat(contribution);
    let parseAmount = parseFloat(amount);
    
    let credit = parseAmount - parseContribution;
    
    function monthsDiff(currentDate, creditEndDate) {
        let creditEndDate = new Date(date).getTime();
        let currentDate = Date.now();
        months = (creditEndDate.getFullYear() - currentDate.getFullYear()) * 12;
        months -= currentDate.getMonth();
        months += creditEndDate.getMonth();
        return months;
    }

    let mountlyPayment = credit * (parsePercent +  parsePercent / ((1 + parsePercent) ** monthsDiff() - 1));
    let totalAmount = (parseContribution + (mountlyPayment * monthsDiff()));
    totalAmount.toFixed(2);
    
    console.log(totalAmount);
    return totalAmount;
    // return totalAmount;
}

function getGreeting(name) {

    let greetingsAnonim = "Привет, мир! Меня зовут Аноним.";
    let greetingsUser = `Привет, мир! Меня зовут ${name}.`;
    let greeting;
    if (name == null) {
        greeting = greetingsAnonim;
        console.log(greetingsAnonim);
    } else if (name == "") {
        greeting = greetingsAnonim;
        console.log(greetingsAnonim);
    } else {
        greeting = greetingsUser;
        console.log(greetingsUser);
    }
    return greeting;

}