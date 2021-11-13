const lowerCase ='abcdefghijklmnopqrstuvwxyz';
const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number='123456790'
const symbols='~`!@#$%^&*()-_+=/*?"{[}];:,.><';


function pwCriteria(){
let lc = confirm('Do you want your password to contain lowercase letters? (ok = yes, cancel = no)');
let uc = confirm('Do you want your password to contain uppercase letters? (ok = yes, cancel = no)');
let num = confirm('Do you want your password to contain numbers? (ok = yes, cancel = no)');
let sym = confirm('Do you want your password to contain characters? (ok = yes, cancel = no)');

if (!lc && !uc && !num && !sym) {
  alert('Please confirm atleast one of the criteria for your password.');
  pwCriteria () 
}
}
pwCriteria()

let charCount = prompt('Length of password must be from 8 to 128 characters')

if ()

document.getElementById('generate').addEventListener('click', () => {



})


//you can index a string