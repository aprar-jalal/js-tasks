
var monthes=" ";

for(var i =1 ; i<=12;i++){
    monthes+=`<option>${i}</option>`
}

document.getElementById("months").innerHTML=monthes;



var user={
    name:'tariq',
    age:31,
    email:'tariq@gmail.com',
    city:'qalqilia'
}

document.getElementById("name").textContent=user.name;
document.getElementById("age").textContent=user.age;
document.getElementById("email").textContent=user.email;
document.getElementById("city").textContent=user.city;