
var headingContent= document.getElementById("heading-text");

function ChangeText(){
   headingContent.textContent="welcome";
};




document.getElementById("btn").onclick=ChangeText;


function changeTheColor(){
    headingContent.classList.add("heading");
};

document.getElementById("change-color").onclick=changeTheColor;