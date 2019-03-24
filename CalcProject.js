
function calculate() {
    var inp = document.getElementById("funcIn").value;
    for(i=0; i<inp.length; i++) {
        if(inp[i] = "^") {
            var here = inp[i-2,i+1];
            console.log(here);
        }
    }
}
