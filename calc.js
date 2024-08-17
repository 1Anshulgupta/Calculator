let power_btn = document.querySelector(".power");
let reset_btn = document.querySelector(".reset");
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".oper");
let equal = document.querySelector(".equal");

let val = true;
power_btn.addEventListener('click', () => {
    if (val == true) {
        display.style.backgroundColor = "skyblue";
        val = false;
        buttons.forEach(button => {
            button.disabled = false;
        })
    }
    else {
        display.style.backgroundColor = "rgb(84, 80, 80)";
        val = true;
        display.innerText = "";
    }
})

reset_btn.addEventListener('click', () => {
    if (display.style.backgroundColor === "skyblue") {
        display.innerText = '';
        buttons.forEach(button => {
            button.disabled = false;
        })
    }
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.style.backgroundColor === "skyblue") {
            let buttonText = button.innerText;
            if (button.innerText !== "=") {
                display.innerText += button.innerText + ' ';
                let len = display.innerText;
                if (len.length > 10) {
                    buttons.forEach(button => {
                        if (button.innerText !== "=") {
                            button.disabled = true;
                        }
                    })
                }
            }
        }
    })
})

equal.addEventListener('click', () => {
    let str = String(display.innerText);
    let result = eval(str);
    display.innerText = result;
})




















/* for two vzlues only
equal.addEventListener('click', () => {
    let str = display.innerText;
    if (display.innerText !== '') {
        if (str.includes('+')) {
            let final = String(str);
            let findi = final.indexOf(`+`);
            let val1 = Number(final.slice(0, findi));
            let val2 = Number(final.slice(findi + 1));
            console.log(val1, val2);
            let output = val1 + val2;
            let stereo = String(output);
            if (stereo.length > 9) {
                display.innerText = output.toFixed(9);
            }
            else {
                display.innerText = output;
            }
        }
        else if (str.includes('-')) {
            let final = String(str);
            let findi = final.indexOf(`-`);
            let val1 = Number(final.slice(0, findi));
            let val2 = Number(final.slice(findi + 1));
            let output = val1 - val2;
            let stereo = String(output);
            if (stereo.length > 9) {
                display.innerText = output.toFixed(9);
            }
            else {
                display.innerText = output;
            }
        }
        else if (str.includes('*')) {
            let final = String(str);
            let findi = final.indexOf(`*`);
            let val1 = Number(final.slice(0, findi));
            let val2 = Number(final.slice(findi + 1));
            let output = val1 * val2;
            let stereo = String(output);
            if (stereo.length > 9) {
                display.innerText = output.toFixed(9);
            }
            else {
                display.innerText = output;
            }
        }
        else {
            let final = String(str);
            let findi = final.indexOf(`/`);
            let val1 = Number(final.slice(0, findi));
            let val2 = Number(final.slice(findi + 1));
            let output = val1 / val2;
            let stereo = String(output);
            if (stereo.length > 7) {
                display.innerText = output.toFixed(8);
            }
            else {
                display.innerText = output;
            }
        }
    }
})*/

