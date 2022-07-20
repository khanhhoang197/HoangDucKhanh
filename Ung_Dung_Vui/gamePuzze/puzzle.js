const win_1 = "http://127.0.0.1:5500/images/1.1.jpghttp://127.0.0.1:5500/images/1.2.jpghttp://127.0.0.1:5500/images/1.3.jpghttp://127.0.0.1:5500/images/1.4.jpghttp://127.0.0.1:5500/images/1.5.jpg";
const win_2 = "http://127.0.0.1:5500/images/2.1.jpghttp://127.0.0.1:5500/images/2.2.jpghttp://127.0.0.1:5500/images/2.3.jpghttp://127.0.0.1:5500/images/2.4.jpghttp://127.0.0.1:5500/images/2.5.jpg";
const win_3 = "http://127.0.0.1:5500/images/3.1.jpghttp://127.0.0.1:5500/images/3.2.jpghttp://127.0.0.1:5500/images/3.3.jpghttp://127.0.0.1:5500/images/3.4.jpghttp://127.0.0.1:5500/images/3.5.jpg";

function changeImage(row){
    let image_1 = document.querySelector('#image_1');
    let image_2 = document.querySelector('#image_2');
    let image_3 = document.querySelector('#image_3');
    let image_4 = document.querySelector('#image_4');
    let image_5 = document.querySelector('#image_5');
    let imgageId = Math.floor(Math.random()* 3 + 1);
    let imageName = `${imgageId}.${row}.jpg`;
    document.querySelector(`#image_${row}`).src = `images/${imageName}`;
    let checkWin = image_1.src + image_2.src + image_3.src + image_4.src + image_5.src;
    if(checkWin == win_1 || checkWin == win_2 || checkWin == win_3){
        document.getElementsByTagName("table")[0].classList.add('completed');
    }
    else{
        document.getElementsByTagName("table")[0].classList.remove('completed');
    }
} 