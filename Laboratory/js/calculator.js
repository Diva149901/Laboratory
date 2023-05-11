var result = 0;
var operator = "";

function operators(op) {
    var input = parseFloat(document.getElementById("input").value);
        if (!isNaN(input)) {
            if (operator === "") {
                result = input;
            } else {
                switch (operator) {
                    case "+":
                        result += input;
                        break;
                    case "-":
                        result -= input;
                        break;
                    case "*":
                        result *= input;
                        break;
                    case "/":
                        result /= input;
                        break;
                }

            }
            operator = op;
            document.getElementById("input").value = "";
        }
}

function equals() {
    var input = parseFloat(document.getElementById("input").value);

        if (!isNaN(input)) {
            switch (operator) {
                case "+":
                    result += input;
                    break;
                case "-":
                    result -= input;
                    break;
                case "*":
                    result *= input;
                    break;
                case "/":
                    result /= input;
                    break;
            }

            document.getElementById("Result").innerHTML = result;
            result = 0;
            operator = "";
        }
}

function clear(){
    document.getElementById("Result").innerHTML = "0";
    document.getElementById("input").value = '';
}