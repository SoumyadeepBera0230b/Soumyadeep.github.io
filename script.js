
let onoff = document.getElementById("onoffbtn");
// console.log(onoff.innerText);
document.getElementById("C").style.backgroundColor = "orange";
document.getElementById("=").style.backgroundColor = "orange";
let y = "OFF";
let a1 = ["OFF"];

let h = document.getElementById("head");
let d = document.getElementById("ans");
function onofffun(buttonvalue) {
    const arr = ["+", "-", "x", "/"];
    if (buttonvalue === "ON") {
        let i = 0;
        function big() {
            h.style.fontSize = "50px";
            h.style.color = "white";
            i += 1;
            if (i == 5) {
                clearInterval(z1)
            }
        } let z1 = setInterval(big, 1000);
        function small() {
            h.style.fontSize = "0";
            h.style.color = "gray";
            h.style.transition = "0.2s";
            if (i == 5) {
                clearInterval(z2);
                
            }
        } let z2 = setInterval(small,2000);
        a1.push("ON");
        // a1.pop(0);
        y = "OFF";
        d.placeholder = "0";
        d.style.backgroundColor = "whitesmoke";
        onoff.innerText = y;
        onoff.style.backgroundColor = "lightgreen";
        let operators = document.querySelectorAll("button");
        for (let i = 0; i < operators.length; i++) {
            if (arr.indexOf(operators[i].innerText) > -1) {
                operators[i].style.backgroundColor = "yellow";
            }
        }
    }
    else if (buttonvalue === "OFF"){
        a1.push("OFF");
        y = "ON";
        console.log("value of d is", d.value);
        d.value = '';
        d.placeholder = "";
        d.style.backgroundColor = "rgb(150, 159, 159)";
        onoff.innerText = y;
        onoff.style.backgroundColor = "lightcoral";
        let operators = document.querySelectorAll("button");
        for (let i = 0; i < operators.length; i++) {
            if (arr.indexOf(operators[i].innerText) > -1) {
                operators[i].style.backgroundColor = "White";
            }
        }
    }

    else if ((a1[a1.length - 1] === "ON")) {
        document.getElementById("C").style.backgroundColor = "orange";
        document.getElementById("=").style.backgroundColor = "orange";
        const arr = ["+", "-", "x", "/"];
        let operators = document.querySelectorAll("button");
        console.log(operators.length);
        for (let i = 0; i < operators.length; i++) {
            if (arr.indexOf(operators[i].innerText) > -1) {
                operators[i].style.backgroundColor = "yellow";
                console.log(operators[i].innerText);
            }
            console.log("+" in arr);
        }


        let val = document.getElementById("ans");

        // console.log(buttonvalue);
        // console.log(val.value);
        if (buttonvalue === "C") {
            val.value = val.value.slice(0, (val.value.length) - 1);
        }
        else if (buttonvalue === "AC") {
            val.value = "";
        }
        else if (buttonvalue === "=") {
            if (val.value[(val.value.length)] - 1 in arr) {
                val.value = val.value;
            }
            else {
                val.value = eval(val.value);
            }

        }
        else {
            val.value = val.value + buttonvalue;

        }
        
        
    }
    
    else {
        console.log("sorry!", buttonvalue);
    }
    console.log(buttonvalue);

}





