let input = "";
let memory = 0;
let result = 0;

function n0() {
    input += "0";
    document.getElementById('input').innerHTML = input;
}

function n1() {
    input += "1";
    document.getElementById('input').innerHTML = input;
}

function n2() {
    input += "2";
    document.getElementById('input').innerHTML = input;
}

function n3() {
    input += "3";
    document.getElementById('input').innerHTML = input;
}

function n4() {
    input += "4";
    document.getElementById('input').innerHTML = input;
}

function n5() {
    input += "5";
    document.getElementById('input').innerHTML = input;
}

function n6() {
    input += "6";
    document.getElementById('input').innerHTML = input;
}

function n7() {
    input += "7";
    document.getElementById('input').innerHTML = input;
}

function n8() {
    input += "8";
    document.getElementById('input').innerHTML = input;
}

function n9() {
    input += "9";
    document.getElementById('input').innerHTML = input;
}

function c() {
    input = "0";
    document.getElementById('input').innerHTML = input;
    input = "";
    memory = 0;
    result = 0;
    document.getElementById('result').innerHTML = result;
}

function bs() {
    if (input.length == 1) {
        input = input.slice(0, -1);
        document.getElementById('input').innerHTML = "0";
    } else {
        input = input.slice(0, -1);
    document.getElementById('input').innerHTML = input;
}
    
}

function M() {
    if (memory == 0) {
        memory = input;  
    } else {
        document.getElementById('input').innerHTML = memory;
        memory = input; 
    }       
}

function fraction() {
    input += ".";
    document.getElementById('input').innerHTML = input;

}
function plus() {
    input += "+";
    document.getElementById('input').innerHTML = input;
}

function minus() {
    input += "-";
    document.getElementById('input').innerHTML = input;
}

function division() {
    input += "/";
    document.getElementById('input').innerHTML = input;
}

function multiplication() {
    input += "*";
    document.getElementById('input').innerHTML = input;
}

function equally() {
    if (input.includes("*")) {
        let number = input.split("*");
        result = parseFloat(number[0])*parseFloat(number[1]);
        document.getElementById('result').innerHTML = result;
        }
    if (input.includes("/")) {
        let number = input.split("/");
        result = parseFloat(number[0])/parseFloat(number[1]);
        document.getElementById('result').innerHTML = result;
        }
    if (input.includes("-")) {
        let number = input.split("-");
        result = parseFloat(number[0])-parseFloat(number[1]);
        document.getElementById('result').innerHTML = result;
        }
    if (input.includes("+")) {
        let number = input.split("+");
        result = parseFloat(number[0])+parseFloat(number[1]);
        document.getElementById('result').innerHTML = result;
        }
    }


