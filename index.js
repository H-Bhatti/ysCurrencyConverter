// USD 269.50
// euro 292.36
// AED 73.37
const USDtoPKR = 269.50;
const EUROtoPKR = 292.36;
const AEDtoPKR = 73.37;
const USDtoEuro = 0.92;
const USDtoAED = 3.67;
const EUROtoAED = 3.98;
let goAgain = false;
import inquirer from "inquirer";
async function convert() {
    do {
        let answer = await inquirer.prompt([{
                name: "currencyFrom",
                type: "list",
                choices: ["USD", "EURO", "AED", "PKR"],
                message: "Select currency to convert From: "
            }, {
                name: "currencyTo",
                type: "list",
                choices: ["USD", "EURO", "AED", "PKR"],
                message: "Select currency to convert to: "
            }, {
                name: "ammount",
                type: "number",
                message: "Enter the amount: "
            }]);
        switch (answer.currencyFrom) {
            case "USD":
                if (answer.currencyTo === "PKR") {
                    let amount = USDtoPKR * answer.ammount;
                    console.log(amount);
                }
                else if (answer.currencyTo === "EURO") {
                    let amount = USDtoEuro * answer.ammount;
                    console.log(amount);
                }
                else if (answer.currencyTo === "AED") {
                    let amount = USDtoAED * answer.ammount;
                    console.log(amount);
                }
                else if (answer.currencyTo === "USD") {
                    console.log(answer.ammount);
                }
                break;
            case "EURO":
                if (answer.currencyTo === "PKR") {
                    let amount = EUROtoPKR * answer.ammount;
                    console.log(amount);
                }
                else if (answer.currencyTo === "EURO") {
                    console.log(answer.ammount);
                }
                else if (answer.currencyTo === "AED") {
                    let amount = EUROtoAED * answer.ammount;
                    console.log(amount);
                }
                else if (answer.currencyTo === "USD") {
                    let amount = answer.ammount / USDtoEuro;
                    console.log(amount);
                }
                break;
            case "AED":
                if (answer.currencyTo === "PKR") {
                    let amount = AEDtoPKR * answer.ammount;
                    console.log(amount);
                }
                else if (answer.currencyTo === "EURO") {
                    let amount = answer.ammount / EUROtoAED;
                    console.log(amount);
                }
                else if (answer.currencyTo === "AED") {
                    console.log(answer.ammount);
                }
                else if (answer.currencyTo === "USD") {
                    let amount = answer.ammount / USDtoAED;
                    console.log(amount);
                }
                break;
            case "PKR":
                if (answer.currencyTo === "PKR") {
                    console.log(answer.ammount);
                }
                else if (answer.currencyTo === "Euro") {
                    let amount = answer.ammount / EUROtoPKR;
                    console.log(amount);
                }
                else if (answer.currencyTo === "AED") {
                    let amount = answer.ammount / AEDtoPKR;
                    console.log(amount);
                }
                else if (answer.currencyTo === "USD") {
                    let amount = answer.ammount / USDtoPKR;
                    console.log(amount);
                }
                break;
        }
        goAgain = await repeat();
    } while (goAgain);
}
async function repeat() {
    let again = await inquirer.prompt([{
            name: "repeat",
            type: "list",
            choices: ["YES", "NO"],
            message: "Do you want to reprat"
        }]);
    return (again.repeat === "YES" ? true : false);
}
convert();
