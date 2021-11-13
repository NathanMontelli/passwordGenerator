const lowerCase ='abcdefghijklmnopqrstuvwxyz';
const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers='123456790'
const symbols='~`!@#$%^&*()-_+=/*?"{[}];:,.><';

document.getElementById('generate').addEventListener('click', () => {

  let generatedPassword = []
  let characters = []

  let lc = confirm('Do you want your password to contain lowercase letters? (ok = yes, cancel = no)');
  let uc = confirm('Do you want your password to contain uppercase letters? (ok = yes, cancel = no)');
  let num = confirm('Do you want your password to contain numbers? (ok = yes, cancel = no)');
  let sym = confirm('Do you want your password to contain characters? (ok = yes, cancel = no)');

  if (!lc && !uc && !num && !sym) {
    alert('Please confirm atleast one of the criteria for your password.')};

   let charCount = prompt('Length of password must be from 8 to 128 characters')

  if (lc) {
    characters = lowerCase;
  } 
  
  if (uc) {
    characters = characters + upperCase;
  } 
  
  if (num) {
    characters = characters + numbers;
  } 
  if (sym) {
    characters = characters + symbols;
  } 

  console.log(characters)

  for (let i = 0; i < charCount; i++) {

  let generatePw = Math.floor(Math.random() * characters.length)

  generatedPassword = generatedPassword + characters[generatePw]
  }
  document.getElementById('password').innerHTML = `${generatedPassword}`
})