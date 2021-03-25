var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var button = document.getElementById("button");

button.onclick = (e) => {
    alert(`${input1.value}   ${input2.value}   ${input1.value}`);
    input1.value = "";
    input2.value = "";
    input3.value = "";
};

