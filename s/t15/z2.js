const user = {
    name: "Петро",
    lastname: "Іванов",
    age: 14,
    email: "petro007@gmail.com",
    city: "Львів"
}

function showUser(){
    const user_data = document.getElementById('user_data');

    user_data.innerHTML = 
    `
    <tr>
        <td>${user.name}</td>
        <td>${user.lastname}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.city}</td>
    </tr>
    `
}

function changeName(new_name){
    if(new_name.length > 2){
        user.name = new_name;
        
        showUser()
    }else{
        alert("Ім'я коротке")
    }
}

function changeLastName(new_lastname){
    if(new_lastname.length > 4){
        user.lastname = new_lastname;
        
        showUser()
    }else{
        alert("Призвіще коротке")
    }
    
    
}
function changeAge(new_age){
    if(typeof new_age === number){

    user.age = new_age;
    
    showUser()
    }else{
        alert("невірно вказаний вік")
    }
}
function changeEmail(new_email){
    if(new_email.includes("@") ){
    user.email = new_email;
    
    showUser()
    }else{
        alert("Fatal error")
    }
}

function changeCity(new_city){
    if(new_city.length > 1){
    user.city = new_city;
    showUser()
    }else{
        alert("Error")
    }
    }


function changeUserData(new_name, new_lastname, new_age, new_email, new_city){
    user.name = new_name;
    user.lastname = new_lastname;
    user.age = new_age;
    user.email = new_email;
    user.city = new_city;
    showUser()
}



showUser()