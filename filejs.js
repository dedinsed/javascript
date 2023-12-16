let btn = document.getElementById('start');
let temp = document.getElementById('fonde');
let canv = document.getElementById('canv');
btn.addEventListener('click',loadFoto);
function loadFoto(rangeFoto){
 fetch('ttps://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20').then(resusult=> resusult.json())
.then(res => res.photos ).then(a => {
    let arr=[]
   for(let i=0; i < 10; i++){
    arr.push(a(i).url);
    
    
}
return arr;
}
 ).then(b =>console.log(b))
}

function createElement(){
    for(let i = 0; llenght; i++){
     let foto = temp.content.cloneNode(true);
     foto.getElementById('ft').setAttribute('src',l[i]);
     console.log(foto);
     canv.appendChild(foto);
    }
}