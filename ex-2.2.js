var num;
for (num = 1; num <= 100; num++) {
    var output = "";
    if (num % 3 === 0) {
        output += "Fizz";
    }
    if (num % 5 === 0) {
        output += "Buzz";
    }
    console.log(output || num);
}