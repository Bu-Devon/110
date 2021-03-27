var plNames = ['chris', 'plat','water','cream','light']

for (i = 0; i < 5; i++){
     h2 = document.createElement('h2');
     h2.textContent = plNames[i],
     document.body.append (h2),
     document.getElementsByTagName("h2")[i].setAttribute("id", "vas"),
     h2.style.color = 'blue';
     h2.style.fontSize = '20px';
     h2.style.fontWeight = 'lighter';
     h2.style.fontFamily = 'sans-serif';
     h2.classList = "border"
         
}



