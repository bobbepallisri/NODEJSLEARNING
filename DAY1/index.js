const caluclator=require('./caluclator')
const even_number=require('./example')
const {add,sub}=caluclator

const print_name=(name)=>{
    console.log(name);
}
print_name('srikanth')
print_name('nxtwave')

console.log(add(2,4));
console.log(sub(2,4));
console.log(even_number(2));