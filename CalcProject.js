
inp = "x^3";
function calculate(inp) {
    //var inp = document.getElementById("funcIn").value;
    for(i=0; i<inp.length(); i++) {
        if(inp[i] = "^") {
            var exp = inp[i+1];
            var temp = exp+"x";
            inp = inp[0,i-1]+temp+inp[i+1,inp.length];
            console.log(inp);
        }
    }
}
