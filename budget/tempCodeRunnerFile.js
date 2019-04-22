function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let c = prompt("Статья необязательных расходов?");
        if ( (typeof(c)) != null && c != "" && c.length < 50) {
            console.log ("Готово");
            let optionalExpenses = {};
            optionalExpenses[i] = c;
        } else {
            i = i -1;
        }
    }   
}
chooseOptExpenses();

console.log(optionalExpenses);