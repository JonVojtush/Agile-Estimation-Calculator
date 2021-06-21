var value = 0
document.getElementById("value").innerHTML = value;

document.getElementById("calculate").addEventListener("click", function calculate() {
    document.getElementById("value").innerHTML = value+2; //+2 is TEMP to verify button functionality
    console.log(value+2 + " Story Points"); //+2 is TEMP to verify button functionality
    }
);

console.log(value + " Story Points");