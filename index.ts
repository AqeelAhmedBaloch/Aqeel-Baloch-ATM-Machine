#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Doller
const myPin = 1234;

console.log("\n\tProject ATM Machine\n\t");


let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your Pin :",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Pin Code Accepted..!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["Withdraw", "Check Balance"],
    },
  ]);

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter Your Amount to Withdraw :",
      },
    ])
    if(amountAns.amount > myBalance){
      console.log('Insufficient Balance');
    }
    else{
      myBalance  -= amountAns.amount;
      console.log(`${amountAns.amount} Withdraw Successfully`);
      console.log("Your remaining balance is :" + myBalance);
      
    }
    // =, -= +=
  }
  else if(operationAns.operation == "Check Balance"){
    console.log("Your balance is :" + myBalance);
  }  
} else {
  console.log("Incorrect Pin Number");
}