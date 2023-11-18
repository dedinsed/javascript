//let condition = false;
//let userName = prompt ("Введите своё имя");
//console.log (userName);
//switch(userName){
// for(let i =0;1 < 10; i++){
// console.log(1*5);
// }

    // case "Путин":
    //     alert(ты);
    //     break;
    //     case "Байден":
    //         alert(тыFT)
    //         break;
    //     case "Deadinsed":
    //     alert(тыFF);
    //             break;
    //             default :
    //             alert("хто ты")
    let manySany = document.getElementById('many').value;
    let manySelect= document.getElementById('chekMany').value;
    let outReult= document.getElementById('out');
    let arr =[82, 12 ,97];
    function converter(){
        console.log(manySany);
    let res = manySany * arr[manySelect -1];
    outReult.innerText =`по нынешнему курсу ${res}`;
}



 
