//check prime
let num=13
count=0;
for(let i=1;i<=num;i++){
if(num%i==0){
count++
}
}if(count==2){
console.log("prime"){
}else{
console.log("not a prime")
}

//check palindrome
let str="aba"
let bag="";
for(let i=str.length;i>=0;i--){
bag+=