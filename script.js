function addUserData(event){
    event.preventDefault();
    var name=document.getElementById('name').value;
    var phone=document.getElementById('phone').value;
    var doctor=document.getElementById('doctor').value;

    var obj = {
        name: name,
        phone: phone,
        doctor: doctor
    }
    var key = `user-${phone}`;
    console.log("Data : ",name,phone,doctor);

    localStorage.setItem(key,JSON.stringify(obj))
    showOnScreen(obj);
    document.getElementById('name').value="";
    document.getElementById('phone').value="";
}
function showOnScreen(obj){
    const parent = document.getElementById('form-ul');
    const child = document.createElement('li')

    child.innerHTML=` <span id='${obj.phone}'> Name = ${obj.name},Phone = ${obj.phone},Doctor = ${obj.doctor} <button type="delete" onclick="deleteUser( ${obj.phone})">Delete</button> </span>` ;

    parent.append(child);
}
document.addEventListener('DOMContentLoaded',show) 

function show(){
    var user = localStorage.getItem('user')
    for(var i=0; i<localStorage.length;i++){
        showOnScreen(user[i]);
    }
 }
 function deleteUser(){
    
 }