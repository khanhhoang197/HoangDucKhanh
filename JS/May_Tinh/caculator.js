function cong(){
    let numberA = Number(document.getElementById("NumberA").value);
    let numberB = Number(document.getElementById("NumberB").value);
    let Result;

    Result = 'Result Division:  ' + (numberA + numberB);
    document.getElementById("Result").innerHTML = Result;
}
function tru(){
    let numberA = Number(document.getElementById("NumberA").value);
    let numberB = Number(document.getElementById("NumberB").value);
    let Result;

    Result = 'Result Division:  ' + (numberA - numberB);
    document.getElementById("Result").innerHTML = Result;
}
function nhan(){
    let numberA = Number(document.getElementById("NumberA").value);
    let numberB = Number(document.getElementById("NumberB").value);
    let Result;

    Result = 'Result Division:  ' + (numberA * numberB);
    document.getElementById("Result").innerHTML = Result;
}
function chia(){
    let numberA = Number(document.getElementById("NumberA").value);
    let numberB = Number(document.getElementById("NumberB").value);
    let Result;

    Result = 'Result Division:  ' + (numberA / numberB);
    document.getElementById("Result").innerHTML = Result;
}