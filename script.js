let btn = document.getElementById('start');
let temp = document.getElementById('fnode');
let canv = document.getElementById('canv');
btn.addEventListener('click',loadFoto);
let path = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=';
function loadFoto(rangeFoto){
    const limit  = setNumber();
    let url = path + limit;
    fetch(url).then(resusult=> resusult.json())
    .then(res => res.photos).then(a => {
        let arr=[];
        for(let i=0; i < limit; i++){
            arr.push(a[i].url);
        }
        //console.log(arr);
        return arr;
        }
        ).then(b =>{
           // console.log(b);
            //createEl(b);
            for(let i = 0; i < limit; i++ ){
                let foto = temp.content.cloneNode(true);
                foto.getElementById('ft').setAttribute('src', b[i]);
                console.log(b[i]);
                canv.appendChild(foto);
        }
     } ).catch(e => alert ("что-то не так?"));
    
}

function setNumber(){
    let limit = document.getElementById('fotoNumber').value;
    console.log(limit)
    if(isNaN(limit) || limit == null ){
        limit = 10;
    }
    
    return