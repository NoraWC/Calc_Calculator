
var str_inp = "x^3";
console.log(str_inp);
function calculate(str_inp) {
    //var inp = document.getElementById("funcIn").value;
    str_inp = "x^3";
    l = str_inp.length;
    for(i = 0; i < l; i++) {
        console.log(str_inp);
        console.log(str_inp.length);
        console.log(l);
        if(str_inp[i] = "^") {
            console.log(i);
            var exponent = str_inp[i+2];
            console.log(exponent);
            var temporary = exponent+"x";
            console.log(temporary);
            return temporary;
        }
    }
}
