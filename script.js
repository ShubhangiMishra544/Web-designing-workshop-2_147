function checkNumber() {
    let number = document.getElementById("num").value;
    let result = document.getElementById("result");

    if (number % 2 == 0) {
        result.innerHTML = number + " is an Even Number";
    } else {
        result.innerHTML = number + " is an Odd Number";
    }
}
