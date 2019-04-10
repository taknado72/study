let money,
    time,
    a1,
    a2,
    a3,
    a4;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

a1 = prompt("Введите обязательную статью расходов в этом месяце", "");
a2 = +prompt("Во сколько обойдется?", "");
a3 = prompt("Введите обязательную статью расходов в этом месяце", "");
a4 = +prompt("Во сколько обойдется?", "");

let appData = {};
appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.moneyPerDay = appData.budget / 30;

for (let i = 0; i < 0; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = +prompt("Во сколько обойдется?", "");

    if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null 
        && a != "" && b != "" && a.length < 50) {
            console.log ("done");
            appData.expenses[a] = b;
        } else {

        }
}

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
