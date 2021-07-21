function sunsetHills() {

    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let value3 = document.getElementById("value3").value;
    let value4 = document.getElementById("value4").value;
    let value5 = document.getElementById("value5").value;
    let value6 = document.getElementById("value6").value;

    let sunlitBuildings = [];

    if (value1 > 0) {
        sunlitBuildings.push(value1);
    }

    if (value2 > value1) {
        sunlitBuildings.push(value2);
    }

    if (value3 > value2 & value3 > value1) {
        sunlitBuildings.push(value3);
    }

    if (value4 > value3 & value4 > value2 & value4 > value1) {
        sunlitBuildings.push(value4);
    }

    if (value5 > value4 & value5 > value4 & value5 > value3 & value5 > value2 & value5 > value1) {
        sunlitBuildings.push(value5);
    }

    if (value6 > value4 & value6 > value5 & value6 > value4 & value6 > value3 & value6 > value2 & value6 > value1) {
        sunlitBuildings.push(value6);
    }

    if (sunlitBuildings.length < 2 & sunlitBuildings > 0) {
        document.getElementById("results").innerHTML = "1 building has light shining on it. This building has a height of " + sunlitBuildings + "."
    }

    if (sunlitBuildings.length > 1) {
        document.getElementById("results").innerHTML = (sunlitBuildings.length) + " buildings have light shining on them. These buildings have the heights of " + sunlitBuildings.join(", ") + "."

    }

}

let invalidChars = [
    "-",
    "+",
    "e",
    "E",
];

let inputBox = document.getElementById("value1");

inputBox.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

let inputBox1 = document.getElementById("value2");


inputBox1.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

let inputBox2 = document.getElementById("value3");

inputBox2.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

let inputBox3 = document.getElementById("value4");

inputBox3.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

let inputBox4 = document.getElementById("value5");

inputBox4.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

let inputBox5 = document.getElementById("value6");

inputBox5.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});