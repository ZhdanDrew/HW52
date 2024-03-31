
Cookies.set('name', 'Ваше ім\'я');
Cookies.set('age', 'Ваш вік');
Cookies.set('email', 'Ваша електронна адреса');

const nameCookie = Cookies.get('name');
const ageCookie = Cookies.get('age');
const emailCookie = Cookies.get('email');

console.log(nameCookie); 
console.log(ageCookie); 
console.log(emailCookie); 

Cookies.remove('name');
Cookies.remove('age');
Cookies.remove('email');
