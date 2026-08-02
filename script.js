console.log("Write JavaScript")

let display = document.querySelector(".display")
let buttons = document.querySelector(".buttons")
let button = document.querySelectorAll("button")

let AC = document.querySelector("#AC")
let DEL = document.querySelector("#DEL")
let EQAL = document.querySelector("#EQAL")
let plus = document.querySelector("#plus")

let str1 = "";
let str2 = "";
let apply = "";
let firstNumber
let result;

Array.from(button).forEach((btn) => {
    btn.addEventListener("click", () => {

        // console.log(btn.innerText);
        display.innerText = display.innerText + btn.innerText;

        if (apply == "") {
            str1 = Number(parseInt(display.innerText));
        }

        if (str1 != "" && btn.innerText == "+") {
            display.innerText = "+"
            apply = display.innerText
        }

        if (str1 != "" && btn.innerText == "-") {
            display.innerText = "-"
            apply = display.innerText;
            display.innerText = "-"
        }
        if (str1 != "" && btn.innerText == "*") {
            display.innerText = "*"
            apply = display.innerText;
            display.innerText = "*"
        }
        if (str1 != "" && btn.innerText == "/") {
            display.innerText = "/"
            apply = display.innerText;
            display.innerText = "/"
        }
        if (str1 != "" && btn.innerText == "%") {
            display.innerText = "%"
            apply = display.innerText;
            display.innerText = ""
        }
        else {
            str2 = Number(parseInt(display.innerText.slice(1, 10)));
        }
    });
})

EQAL.addEventListener("click", () => {
    if (apply == "+") {
        result = str1 + str2;
        display.innerText = `${str1}${apply}${str2} = ${result}`
    }
    else if (apply == "-") {
        result = Number(str1) - Number(str2);
        display.innerText = `${str1}${apply}${str2} = ${result}`
    }
    else if (apply == "*") {
        result = Number(str1) * Number(str2);
        display.innerText = `${str1}${apply}${str2} = ${result}`
    }
    else if (apply == "/") {
        result = Number(str1) / Number(str2);
        display.innerText = `${str1}${apply}${str2} = ${result}`
    }
    else if (apply == "%") {
        result = Number(str1) / 100;
        display.innerText = result
    }

})

AC.addEventListener("click", () => {
    display.innerText = ""
    str1 = "";
    str2 = "";
    apply = "";
})



