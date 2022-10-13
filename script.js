function addUserData(event){
    event.preventDefault()
    var name=document.getElementById('name').value;
    var phone=document.getElementById('phone').value;
    var doctor=document.getElementById('doctor').value;
    console.log("Name: ",name,phone,doctor);
}