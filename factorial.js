const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout

})



console.log("Factorial Application");

console.log("1. Hello");
console.log("2. Compute Factorial");
console.log("3. exit");

rl.question("Enter your choice (1-3)", choice =>{
    if(choice === "1"){
        console.log("Hello There!");
    }else if (choice === "2"){
        console.log("Factorial");


        
        rl.question("Enter a number for factorial: ", (numStr) =>{
            let num = parseInt(numStr);

            if(isNaN(num) || num<0){
                console.log("Plaese enter a non-negative integer");
            } else {

                let fact = 1;

                for (let i = 1; i <= num ; i++){
                    fact *=i;
                }

                console.log("The factorial of " + num + "is" + fact);
             
            }
        });
