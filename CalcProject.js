
var str_inp = "x^3";
console.log(str_inp);
function calculate(str_inp) {
    //var inp = document.getElementById("funcIn").value;
    str_inp = "x^3";
    for(i = 0; i < str_inp.length; i++) {
        console.log(str_inp);
        console.log(i);
        if(str_inp[i] = "^") {
            var exponent = str_inp[i+1];
            console.log(exponent);
            var temporary = exponent+"x";
            console.log(temporary);
            str_inp = str_inp[0,i-1]+temporary+str_inp[i+1,str_inp.length];
            console.log(str_inp);
        }
    }
}
