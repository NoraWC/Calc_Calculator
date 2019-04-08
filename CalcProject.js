
var str_inp = "x^3";
function calculate(str_inp) {
    //var inp = document.getElementById("funcIn").value;
    for(i = 0; i < str_inp.length; i++) {
        if(str_inp[i] = "^") {
            var exp = str_inp[i+1];
            var temp = exp+"x";
            str_inp = str_inp[0,i-1]+temp+str_inp[i+1,str_inp.length];
            console.log(str_inp);
        }
    }
}
