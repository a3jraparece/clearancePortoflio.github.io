
var stat = false;

function openMenu() {


    var img = document.getElementById('menu');
    var li = document.getElementById('lists');

    if (stat === false) {
        img.src = 'IMAGES/cross.png';
        stat = true;
        li.style.right = '0';
        li.style.borderTopLeftRadius = '0';
        li.style.borderBottomLeftRadius = '0';

    } else {
        img.src = 'IMAGES/list.png';
        stat = false;
        li.style.right = '-200px';
        li.style.borderTopLeftRadius = '50%';
        li.style.borderBottomLeftRadius = '50%';
    }


}

function fullScreenIMG(srcLINK) {
    document.getElementById('fullScreenIMG').src = srcLINK;
    document.getElementById('imgFullScreen').style.display = 'block';
    document.getElementById('whole').style.filter = 'blur(10px)';
}

function closeFULLSCREENIMG() {
    document.getElementById('imgFullScreen').style.display = 'none';
    document.getElementById('whole').style.filter = '';
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeFULLSCREENIMG();
        }
    });
});