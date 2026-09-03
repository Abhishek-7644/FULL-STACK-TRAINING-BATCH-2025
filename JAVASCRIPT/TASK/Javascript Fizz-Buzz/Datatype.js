let start = Number(prompt("Enter Start Number:"));

let end = Number(prompt("Enter End Number:"));


if (start > end) {

    console.log("Invalid Range");

}
else {

    for (let i = start; i <= end; i++) {

        if (i % 3 === 0 && i % 5 === 0) {

            console.log("FizzBuzz");

        }

        else if (i % 3 === 0) {

            console.log("Fizz");

        }

        else if (i % 5 === 0) {

            console.log("Buzz");

        }

        else {

            console.log(i);

        }

    }

}