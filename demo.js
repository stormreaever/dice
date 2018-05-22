"use strict";

var Dice = require("dice-typescript");

var die = new Dice.Dice();
var result = die.roll("1d6");
// console.log(result);
console.log('=', result.renderedExpression);
console.log('=', result.total);


const DiceRoll = require('rolldice');

// create and evaluate a dice rolling expression
let dice = new DiceRoll('d4 + 2d12 + 3d3 for great justice');

// get the boolean value of the expression's validity check
let syntaxIsValid = dice.expression.isValid;
// > true

// get the numerical value of the expression
let rollTotal = dice.expression.result;
// > 27

// get a string description of each roll result within the specified expression
let rollDetails = dice.expression.toDetails();
// > 'Total: 27\r\nFormula: 1d4 + 2d12 + 3d3\r\nRolls:\r\n(1d4) [4] = 4\r\n(2d12) [6,11] = 17\r\n(3d3) [1,3,2] = 6'

// get a string representation of the roll total and roll details
console.log('For', dice.toString());
// > For great justice: 18 rolls: 1d4(2=2) + 2d12(11=8+3) + 3d3(5=2+1+2)

// display a readout of all the syntax supported by the dice rolling parser
console.log(new DiceRoll('help').toString());
