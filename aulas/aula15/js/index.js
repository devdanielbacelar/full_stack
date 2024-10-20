let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString[4]);
console.log(umaString.charAt(5));
console.log(umaString.concat(' ', 'Em um dia'));
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('Texto'));
console.log(umaString.indexOf('Um'));
console.log(umaString.indexOf('Um', 3));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o'));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/));
console.log(umaString.search(/[x]/));
console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-3));
console.log(umaString.slice(32));
console.log(umaString.slice(-5));
console.log(umaString.split(' '));
console.log(umaString.split('r'));
console.log(umaString.split(' ', 2));
console.log(umaString.toLocaleUpperCase());
console.log(umaString.toLocaleLowerCase());

