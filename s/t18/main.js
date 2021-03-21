const users = [
	{
		name: "Олег",
		email: "olegivanov@.gmail.com"
	},
	{
		name: "Таня",
		email: "taniavit@.gmail.com"
	},
	{
		name: "Тарас",
		email: "tarik95@.gmail.com"
	},
	{
		name: "Оксана",
		email: "oksana2002@.gmail.com"
	}
];


function showError(text){
    const message = document.getElementById('message')

    message.innerHTML = `<div class="alert alert-danger col-6">${text}</div>`
    
    setTimeout(clearMessage, 3000)
}   

function clearMessage(){
    const message = document.getElementById('message')
    message.innerHTML = ``
}

function showSuccess(text){
    const message = document.getElementById('message')

    message.innerHTML = `<div class="alert alert-success col-6">${text}</div>`
    
    setTimeout(clearMessage, 3000)
}  

function checkName(){
    const name = document.getElementById('name').value;

    const filtered = users.filter( function(user){
       return user.name.toLowerCase() === name.toLowerCase() 
    } )

    if( filtered.length > 0){
       showError("Таке ім'я вже зайнято!")
       return false; 
    } else {
        return true;
    }
}
function checkEmail(){
    const email = document.getElementById('email').value;

    const filtered = users.filter( function(user){
       return user.email.toLowerCase() === email 
    } )

    if( filtered.length > 0){
       showError("Такий email вже занятий!")
       return false; 
    } else {
        return true;
    }
}


function register(){
    const name     = document.getElementById('name').value;
    const email    = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   let error_text = ``;

   if( name.length < 3){
       error_text += `Ім'я коротке. <br> `
   }

   if( email.length < 6){
    error_text += `email короткий. <br> `
}

if( password.length < 6){
    error_text += `пароль короткий. <br> `
}

 if( name.length >= 3 && email.length >= 6 && password.length >= 6 && checkName() && checkEmail()){
        showSuccess('Ви успішно зареяструвалися!')
 } else {
     showError(`Помилка перевірте чи все правильно Ви написали.<br>${error_text}`)
 }
}