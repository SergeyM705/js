let money = prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD");

let expenses = {};

for (let i = 1; i < 3; i++) {
  let first = prompt("Введите обязательную статью расходов в этом месяце");

  let second = prompt("Во сколько обойдется?");

  expenses[first] = second;
}

const appData = {
  money,
  timeData: time,
  expenses,
  optionalExpenses: {},

  income: [],
  savings: false,
};

let totalExp = Object.values(expenses).reduce((acc, el) => {
  acc += +el;
  return acc;
}, 0);

alert(`Бюджет на 1 день: ${(money - totalExp) / 30}`);
