const calc = require('./calc');

calc.set(10);

calc.add(2); // 12
calc.mult(4); // 48
calc.div(3); // 16
calc.sub(10); // 10

calc.getResult(); // <- должен вернуть результат
calc.printResult(); // <- выводит результат в консоль