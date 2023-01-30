var calculation = require('./calculation.js');

var rateph = 300;
var hours = 4;
var days = 6;
var taxrate = 0.1;

var sss = 1200;
var pagibig = 300;
var philhealth = 400;

var grosspay = calculation.multiplication(rate, hours);
var grosspay2 = calculation.multiplication(grosspay, days);
var tax = calculation.multiplication(grosspay, taxrate);
var deduction = calculation.add(tax, sss);
var deduction2 = calculation.add(pagibig, philhealth);
var deduction3 = calculation.add(deduction, deduction2);
var netsal = calculation.subtract(grosspay2, deduction3);

console.log('The gross income is: ' + grosspay2);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-ibig fund: ' + pagibig);
console.log('PhilHealth: ' + philhealth);
console.log('Total deduction: ' + deduction3);
console.log('The Net Salary is: ' + netsal);
