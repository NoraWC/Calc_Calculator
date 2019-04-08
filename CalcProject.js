
inp = "x^3";
function calculate(inp) {
    //var inp = document.getElementById("funcIn").value;
    length = inp.length;
    for(i=0; i<length; i++) {
        if(inp[i] = "^") {
            var exp = inp[i+1];
            var temp = exp+"x";
            inp = inp[0,i-1]+temp+inp[i+1,inp.length];
            console.log(inp);
        }
    }
}
