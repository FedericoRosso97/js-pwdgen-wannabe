const userName=prompt('nome utente');
const userSurName=prompt('cognome utente');
const favoriteColor=prompt('colore preferito');

const password= userName+userSurName+favoriteColor+"21";

document.getElementById('form').innerHTML=password;

console.log(password);