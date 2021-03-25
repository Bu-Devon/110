var plNames = ['chris', 'plat','water','cream','light']

for (i = 0; i < 5; i++){
    console.log (h2 = document.createElement('h2'),
     h2.textContent = plNames[i],
     document.body.append (h2),
     document.getElementsByTagName("h2")[i].setAttribute("id", "vas"),
     h2.style.color = 'blue',
     h2.style.fontSize = '20px',
     h2.style.fontWeight = 'lighter',
     h2.style.fontFamily = 'sans-serif',
     
     )
}
var els = document.getElementsByClassName("myClass");
for(var i = 0; i < h2.length; i++)
{
    h2 = document.getElementById('vas')
    h2.className += 'border'
    h2.classList.add ('border')

  console.log(h2.className[i]);
}



var h2 = document.getElementById('vas')
h2.className += 'border'

h2.classList.add ('border')
console.log (h2.className[i])





