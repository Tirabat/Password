const lenght = +prompt('Какая будет длина пароля?')
const number = confirm('В пароле будут цифры?')
const specNumber = confirm('Нужны ли в пароле спецсимволы?')
const allowedSymbols = []
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers   = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols   = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-'];
 let password = ""

lowercase.forEach(element => {
    allowedSymbols.push(element)
});
uppercase.forEach(element => {
    allowedSymbols.push(element)
});
if (number){
    numbers.forEach(element =>{
        allowedSymbols.push(element)
    })
}  
if (symbols){
    symbols.forEach(element => {
        allowedSymbols.push(element)
    });
}

for (let i = 0; lenght > i; i ++){
    const randomIndex = Math.floor(Math.random() * allowedSymbols.length);
    const randomLetter = allowedSymbols[randomIndex];
    password += randomLetter
}
alert(`Ваш пароль: ${password}`)