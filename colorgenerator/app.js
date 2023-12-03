//function decleration

// function sum(a,b){
//     return a+b;
// }
// const result = sum (5,7);
// console.log(result);

// const multiply = (a,b) => {
//     return a*b
// }
//or
//const multiply = (a,b) => a*b
// console.log(multiply(3,4));

//2-Callbacks

// const greet =(name)=>{
//     console.log('hi'+name);
// }
// const callMe=(callback)=>{
//     let name=prompt("enter your name");
//     callback(name);
// }
// callMe(greet);

//3-Closuers

// function init(){
//     var name = "SDC";
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }
// init();

//1-Filter

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => num>4)
// console.log(newNums);

//2-Map

// const myNums = [1,2,3,4,5,67,8,9]
// const newNums = myNums.map((num)=>{return num+10} )
// console.log(newNums);

//3-Reduce

// const myNums = [1,2,3,4,5]
// const myTotal = myNums.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
// console.log(myTotal);

// const a=4;
// const a=5;
// console.log(a);

// var a=6;
// var a=7;
// console.log(a);

// let b=3;
// let b=4;
// console.log(b)

// let a=2;
// let b=3;


// console.log(a+b);
// console.log(a**b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%Sb);

// let a='hii';
// console.log(a);


// console.log(5+"5");


// var a = {
//     fname : 'yahoo',
//     lname : 'baba',
//     age : 25,
//     email : 'hello@yahoobaba.net',
//     favMovies : ['Dhoom','Sholy','Hum'],
//     salary :function(){
//         return 25000;
//     }
// }
// console.log(a);
// document.write(a.salary());


// let a=5;
// if(a%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// let age=24;
// if(age==14){
//     console.log("teenager")
// }
// else(age==19){
//     console.log("")
// }

// let day=1;
// switch(day){
//     case 0:
//     console.log("sunday")
//     break;

//     case 1:
//     console.log("monday")
//     break;
   
//     case 2:
//     console.log("tuesday")
//     break;

//     default:
//         console.log("invalid")
// }

// function myNums(g1,g2){
//     return g1/g2;
// }
// const value=myNums(6,3)
// console.log(value)

// function calcAddition(num1,num2){
//     return num1+num2;
// }
// console.log(caalcAddion(2,3))

// alert("helloworld");

// for(let i=0;i<5;i++){
//     console.log(i)
// }

// for(let i=2;i<=20;i=i+2){
//     console.log(i)
// }

// for(let i=1;i<=10;){
//     let result = 2*i;
//     console.log("2 * "*i+ "=" + result)
// }


// let i=5;
// while(i<=15){
//     console.log("SDC");
//     i++;
//  }

// const obj = {name:"Annu" , class:4, section:"g"};
// for(let x in obj){
//     console.log(x+ ':' + obj[x]);
// }


//array literal method
// const city = ["Noida","Delhi","Kanpur"];
// let leng = city.length;
// console.log(leng);

// for(i=0;i<leng;i++){
//     console.log(city[i]);
// }


//method array direct using new keyword

// const myname = new Array();

// myname[0] ="priyanka";
// myname[1] ="annu";

// myname[2] ="anchal";

// let length = myname.length;


// let fruits = new Array ("apple","mango","grapes");
// for(i=0;i<fruits.length;i++){

// }

//classes

let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("generate random color");
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}