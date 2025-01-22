const str = "Is this all there is?";
const reg = /is/ig;

console.log(reg.exec(str));
console.log(reg.test(str));

console.log(str.match(reg));

console.log(str.match(reg).length);

console.log(str.replace(reg, "IS"));
console.log(str.search(reg));
console.log(str.split(reg));
