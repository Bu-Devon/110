{  
var nav = document.createElement('ul');
document.body.append (nav)
document.getElementsByTagName("ul")[0].setAttribute("id", "listA")
nav.innerHTML += '<li><a href = "">' + 'home' + '</a></li>';
nav.innerHTML += '<li><a href = "">' + 'about' + '</a></li>';
nav.innerHTML += '<li><a href = "">' + 'contact' + '</a></li>';
nav.innerHTML += '<li><a href = "">' + 'news' + '</a></li>';
const navList = ["home", "about", "contact","news"];
}


var h1 = document.createElement('h1');
h1.textContent = "THE AIR IS FINE";
document.body.append(h1)


{
var pTag = document.createElement('p');
pTag.textContent = "the water is clean";
document.body.appendChild (pTag);
}

{
var list = document.createElement('ul');
document.body.append(list);
const element = ["earth", "water", "fire", "air"]
for (i = 0; i < element.length; i++){
    console.log( list.innerHTML += '<li>' + element[i] + '</li>')
}
}

{
var footer = document.createElement('footer');
footer.innerHTML  = '<p>looking for more <br> <button type="button">Look here !</button></p>'
document.body.append(footer)



}