
var div = document.createElement('div');
div.style.width = '600px';
div.style.height = '600px';
div.style.width = 'Square';
div.style.backgroundColor = 'white';
document.body.appendChild(div);


window.onload = ("load",function(){ 
     div.style.backgroundColor = 'black' 
});


div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = "blue";
});

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = "red";
});

div.addEventListener('mouseup', (e) => {
    div.style.backgroundColor = "yellow";
});

div.addEventListener('dblclick', (e) => {
    div.style.backgroundColor = "green";
});


window.addEventListener('mousewheel', (e) => {
    div.style.backgroundColor = "orange";
});



window.addEventListener('keypress', (e) => {
    switch(e.key)
    {
        case "r":
            div.style.backgroundColor = "red";
        break;
            
        case "b":
            div.style.backgroundColor = "blue";
        break;

        case "y":
            div.style.backgroundColor = "yellow";
        break;

        case "g":
            div.style.backgroundColor = "green";
        break;

        case "o":
            div.style.backgroundColor = "orange";
        break;
    }
});
