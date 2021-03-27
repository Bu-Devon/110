var enterArray = [];
var operationNames = ["Add", "Sub", "Multiply"];


for(i = 0; i < 3; i++) {
    var div = document.createElement("div");
    div.style.display = "block";

    var input1 = document.createElement('input');
    input1.id = "first" + i.toString();
    input1.style.margin = "10px";
    input1.style.padding = "2px";
    div.appendChild(input1);

    var input2 = document.createElement('input');
    input2.id = "second" + i.toString();
    input2.style.margin = "10px";
    input2.style.padding = "2px";
    div.appendChild(input2);

    var enter = document.createElement('input');
    enter.style.margin = "10px";
    enter.style.padding = "2px";
    enter.type = "submit";
   enterArray.push(enter);
   div.appendChild(enter);

    var operations = document.createElement('p');
    operations.style.margin = "20px";
    operations.style.fontSize = "30px";
    operations.textContent = operationNames[i];
    div.appendChild(operations);
    document.body.appendChild(div);
}


var answer = document.createElement("p");
answer.id = "answer";
answer.textContent = "Answer: ";
answer.style.margin = "15px";
answer.style.fontSize = "20px";

document.body.appendChild(answer);

enterArray[0].addEventListener('click', (e) => {
    var input1 = document.getElementById("first0");
    var input2 = document.getElementById("second0");
    var answer = document.getElementById("answer");

    answer.textContent =  + (parseInt(input1.value) + parseInt(input2.value));

    input1.value = "";
    input2.value = "";
});

enterArray[1].addEventListener('click', (e) => {
    var input1 = document.getElementById("first1");
    var input2 = document.getElementById("second1");
    var answer = document.getElementById("answer");

    answer.textContent =  + (input1.value) - (input2.value);

    input1.value = "";
    input2.value = "";
});

enterArray[2].addEventListener('click', (e) => {
    var input1 = document.getElementById("first2");
    var input2 = document.getElementById("second2");
    var answer = document.getElementById("answer");

    answer.textContent =  (input1.value) * (input2.value);

    input1.value = "";
    input2.value = "";
});