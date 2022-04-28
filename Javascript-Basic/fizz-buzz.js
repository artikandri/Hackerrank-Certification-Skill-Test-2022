function fizzBuzz(n) {
    for(let i = 1; i<= n; i++) {
        let res = "";
        if(i%3 == 0) res+= "Fizz";
        if(i%5 == 0) res+= "Buzz";
        if(i%3 != 0 && i%5 !=0) res = i;
        console.log(res);
    }
}
