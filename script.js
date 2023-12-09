//let condition = false;
//let userName = prompt ("Введите своё имя");
//console.log (userName);
//switch(userName){
// for(let i =0;1 < 10; i++){
// console.log(1*5);
// };

// let c = "глобальная переменная";

// function sum(a,b){
//     var c= a +b ;
//     console.log('Облость видемости функции ${c}');
//     if(c > 12);{

//     let c = "облость блока";
//     }

// console.log ('Выход из блока значения ${c} ');
//     return c;
// }

// sum(5,7);
// console.log(c);

// let polkan = {
//     poroda : 'алабай',
//     speak : function(){
//         console.log('Gav Gav $(this.age)')

//     },
//     age:100,
// }
// polkan.speak();

// let users =[
//   {id:  1,
//   uname: "Leanne Graham",
//   username: "Bret",
//   age:12,
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874"},
  
      

//   },


//   {id: 2,
//   name: "Ervin Howell",
//   username: "Antonette",
//   age:25,
//   email: "Shanna@melissa.tv",
//   address: {
//     street: "Victor Plains",
//     suite: "Suite 879",
//     city: "Wisokyburgh",
//     zipcode: "90566-7771",
   
//   },
  
// },
// {
//     id: 3,
//   name: "Clementine Bauch",
//   username: "Samantha",
//   age:25,
//   email: "Nathan@yesenia.net",
//   address: {
//     street: "Douglas Extension",
//     suite: "Suite 847",
//     city: "McKenziehaven",
//     ipcode: "59590-4157",
    
//   },
// },
// ]

// //найти пользователя с возврастом 25 лет
// let resl= users.filter(a => a.age == 25);
// console.table(resl);
// //из массива пользователя создать массив email
// let res2= users.map(a => a.email);
//  console.table(res2);
//  //найти пользователя у которого в username есть буква а
//  let res3= users.filter (n => {
//     if(n => n.username.indexOf('a') == -1 && n.username.indexOf('A')== -1){
//           return true;
//     }
//     return false;
// }
//  )
//     console.table(res3);
//     // из массива пользователя сделать streat

//     let res4= users.map(a =>a.address.suite);
//     console.table(res4);

const btnLeft = document.getElementById("left");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnRight = document.getElementById("right");
let monitor = document.getElementById('mon');
let changeCar = document.getElementsByTagName('select')[0];
let imgLeft = document.getElementById("curLeft");
let imgUp = document.getElementById("curUp");
let imgDown = document.getElementById("curDown");
let imgRight = document.getElementById("curRight");
let groupBtn = document.getElementById('g');
groupBtn.addEventListener("click",groupSelection);

let curTrans = 0;
if(localStorage.getItem('cur')){
  // curTrans = localStorage.getItem('cur');
}


changeCar.addEventListener('change', function(e){
      curTrans = changeCar.options.selectedIndex - 1;
      console.log(curTrans);
      curFolder = `${folder}${arrTrans[curTrans].path}/`;
      let path = `${curFolder}left.jpg`
      monitor.setAttribute('src', path);
      path = `${curFolder}up.jpg`
      imgUp.setAttribute('src', path);
      path = `${curFolder}down.jpg`
      imgDown.setAttribute('src', path);
      path = `${curFolder}right.jpg`
      imgRight.setAttribute('src', path);
     
      localStorage.setItem('cur', curTrans);
})

function  groupSelection(e){
  switch(btn){
    case  "left":
      runLeft();
      case  "up":
      runUp();
      case  "Down":
      runDown();
      case  "Right":
      runRight();
      break;
      
  }
}

const folder = "img/tanks/";
const arrTrans = [{ path:"logan",
                  carName:"Логон"},
                  { path:"samosval",
                  carName:"Самосвал"},
                  { path:"t34",
                  carName:"Т34"},
                  {path:"t90",
                  carName:"Т90"},
                  {path:"uaz",
                  carName:"УАЗ"}];

let = curFolder = `${folder}${arrTrans[curTrans].path}/`;

for( i =0; i < arrTrans.length ; i++){


let el0ption = document.createElement("option")
el0ption.setAttribute("value", i);
el0ption.textContent = arrTrans[i].carName;
changeCar.append(el0ption);
}

function runLeft(){
    console.log("Поехали влево");
  let path = `${curFolder}left.jpg`
    monitor.setAttribute('src', path);
}
function runUp(){
    console.log("Поехали вперёд");
  let path = `${curFolder}up.jpg`
    monitor.setAttribute('src', path);
}

function runDown(){
    console.log("Поехали назад");
   let path = `${curFolder}down.jpg`
    monitor.setAttribute('src', path);
}
function runRight(){
    console.log("Поехали вправо");
  let path = `${curFolder}right.jpg`
    monitor.setAttribute('src', path);
}

btnLeft.addEventListener('click', runLeft);
btnUp.addEventListener('click', runUp);
btnDown.addEventListener('click', runDown);
btnRight.addEventListener('click', runRight);

