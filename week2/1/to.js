var site = document.createElement('H1');
site.textContent = 'Welcome to my JS site';
document.body.prepend(site);

var theP = document.createElement('p');
theP.textContent = 'All of this was created with JavaScript';
document.body.appendChild(theP);

var orList = document.createElement('li');
orList.textContent = 'blue';
var listA = document.getElementById('listA');
listA.appendChild(orList);

var orList = document.createElement('li');
orList.textContent = 'red';
var listA = document.getElementById('listA');
listA.appendChild(orList);

var orList = document.createElement('li');
orList.textContent = 'green';
var listA = document.getElementById('listA');
listA.appendChild(orList);






