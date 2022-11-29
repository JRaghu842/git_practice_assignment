
//You are given a number stored in a variable with the name num.
//Check if the number is a prime number or not
//If the value stored in num, is a prime number print Yes, else print No

    let num = 10
    let count =0;
    for (let i=0; i<num; i++) {
        if (i%num == 0) {
            count++
        }
    }

    if (count>2) {
        console.log("Yes"){