var calculation = require('./calculation');

var rateph = 300;
var hours = 4;
var days = 6;
var taxrate = 0.1;

var sss = 1200;
var pagibig = 300;
var philhealth = 400;

var grosspay = calculation.multiplication(rate, hours, days);
var tax = calculation.multiplication(grosspay, taxrate);
var deduction = calculation.add(tax, sss, pagibig, philhealth);
var netsal = calculation.subtract(grosspay, deduction);

console.log('The gross income is: ' + grosspay);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-ibig fund: ' + pagibig);
console.log('PhilHealth: ' + philhealth);
console.log('Total deduction: ' + deduction);
console.log('The Net Salary is: ' + netsal);
