'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let expa = prompt("Введите обязательную статью расходов в этом месяце", "");
let expb = Number(prompt("Во сколько обойдется?", ""));
let expc = prompt("Введите обязательную статью расходов в этом месяце", "");
let expd = Number(prompt("Во сколько обойдется?", ""));


let appData = {
	budget: [money],
	timeData: [time],
	expenses: {
		expa: expb,
		expc: expd		
	},
	optionalExpenses: "",
	income: "",
	savings: ""
};

let dayBudget = (Number(appData.budget) - (appData.expenses.expa + appData.expenses.expc))/30;

console.log("Бюджет на день: " + dayBudget);