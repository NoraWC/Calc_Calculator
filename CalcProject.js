
function calculate() {
    var inp = document.getElementById("funcIn").value;
    for(i=0; i<inp.length; i++) {
        if(inp[i] = "x^") {
            var exp = inp[i+1];
            var temp = exp+"x";
            inp = inp[0,i-1]+temp+inp[i+1,inp.length];
            console.log(here);
        }
    }
}
