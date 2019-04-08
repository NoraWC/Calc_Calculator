console.log(str_inp);
function calculate() {
    var str_inp = document.getElementById("funcIn").value;
    l = str_inp.length;
    for(i = 0; i < l; i++) {
        console.log(str_inp);
        console.log(str_inp.length);
        console.log(l);
        if(str_inp[i] = "^") {
            console.log(i);
            var exponent = str_inp[i+2];
            console.log(exponent);
            var temporary = parseInt(exponent)-1;
            console.log(temporary);
            var final = temporary+"x";
            console.log(final);
            return final;
        }
    }
}
