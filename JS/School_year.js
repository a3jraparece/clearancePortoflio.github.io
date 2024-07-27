var yearListOpened = true;

function openYearMenu() {


    var yearMain = document.getElementById('year');
    var yearMenu = document.getElementById('yearMenu');
    var arrowImg = document.getElementById('arrowImg');
    // var yearList = document.getElementById('yearList');


    var left = document.getElementById('left');
    left.style.height = 'auto';


    if (yearListOpened == true) {
        yearMain.style.gridTemplateColumns = '70px 1fr';
        yearMenu.style.justifySelf = 'start';
        yearListOpened = false;
        arrowImg.style.transform = 'rotate(180deg)';

        // yearList.style.display = 'none';
    } else {
        yearMain.style.gridTemplateColumns = '1.3fr 3fr';
        yearMenu.style.justifySelf = 'end';
        yearListOpened = true;
        arrowImg.style.transform = 'rotate(0deg)';
    }

    // #year {
    //     display: grid;
    //     grid-template-columns: 1.3fr 3fr;
    //     grid-template-rows: 1fr;
    //     gap: 10px;
    // }
}


var yearListOpened2 = true;

// #year {
//     grid-template-columns: 1fr;
//     grid-template-rows: 1fr 1fr;
// }

function closeYearMenu() {

    var yearMain = document.getElementById('year');
    var arrowImg = document.getElementById('arrowImg2');



    if (yearListOpened2 === true) {

        yearMain.style.gridTemplateRows = '60px 1fr';

        arrowImg.style.transform = 'rotate(270deg)';
        yearListOpened2 = false;

    } else {

        yearMain.style.gridTemplateRows = 'auto 1fr';

        arrowImg.style.transform = 'rotate(90deg)';
        yearListOpened2 = true;

    }


}


// ERROR BELOW


// function closeYearMenu() {
//     // var left = document.getElementById('left');
//     // var arrowImg = document.getElementById('arrowImg2');

//     var yearMain = document.getElementById('year');



//     if (yearListOpened2 === true) {
//         // left.style.height = '70px';
//     var yearMain = document.getElementById('year');
//         arrowImg.style.transform = 'rotate(270deg)';

//         yearListOpened2 = false;
//     } else {
//         // left.style.height = 'auto';

//         arrowImg.style.transform = 'rotate(90deg)';
//         yearListOpened2 = true;
//     }

//     // grid-template-columns: 1fr;
//     //     grid-template-rows: 67px 1fr;
// }



// EXPANDS

var first = false;

function expandFirst() {

    var expandFirst = document.getElementById('firstToExpand');
    var firstClick = document.getElementById('firstClick');

    if (first === false) {

        expandFirst.style.display = 'block';
        firstClick.innerHTML = '--';
        first = true;
    } else {

        expandFirst.style.display = 'none';
        firstClick.innerHTML = '+';
        first = false;
    }
}

var second = false;

function expandSecond() {
    var expandSecond = document.getElementById('secondToExpand');
    var secondClick = document.getElementById('secondClick');
    if (second === false) {

        expandSecond.style.display = 'block';
        secondClick.innerHTML = '--';
        second = true;
    } else {
        expandSecond.style.display = 'none';
        secondClick.innerHTML = '+';
        second = false;
    }
}

var third = false;

function expandThird() {
    var expandThird = document.getElementById('thirdToExpand');
    var thirdClick = document.getElementById('thirdClick');
    if (third === false) {

        expandThird.style.display = 'block';
        thirdClick.innerHTML = '--';
        third = true;
    } else {

        expandThird.style.display = 'none';
        thirdClick.innerHTML = '+';
        third = false;
    }
}

var fourth = false;

function expandFourth() {

    var expandFourth = document.getElementById('fourthToExpand');
    var fourthClick = document.getElementById('fourthClick');

    if (fourth === false) {
        expandFourth.style.display = 'block';
        fourthClick.innerHTML = '--';
        fourth = true;
    } else {
        expandFourth.style.display = 'none';
        fourthClick.innerHTML = '+';
        fourth = false;
    }
}

// SWITCHING SECTIONS



var fyfscp = document.getElementById('fyfscp');
var fysscp2 = document.getElementById('fyfscp2');
var fysswb = document.getElementById('fyfswb');

function offAllSections() {
    fyfscp.style.display = 'none';
    fysscp2.style.display = 'none';
    fysswb.style.display = 'none';
}

function resetHIGHLIGHTED() {
    document.getElementById('firstToExpand').querySelectorAll('h5')[0].style.backgroundColor = "";
    document.getElementById('firstToExpand').querySelectorAll('h5')[1].style.backgroundColor = "";
    document.getElementById('firstToExpand').querySelectorAll('h5')[2].style.backgroundColor = "";
}

function fyfscpF() {
    offAllSections();
    resetHIGHLIGHTED();
    fyfscp.style.display = 'block';
    document.getElementById('courseTITLE').innerHTML = 'Computer Programming';

    document.getElementById('firstToExpand').querySelectorAll('h5')[0].style.backgroundColor = "rgba(213, 1, 91, 1)";
}

function fysscp2F() {
    offAllSections();
    resetHIGHLIGHTED();
    fysscp2.style.display = 'block';
    document.getElementById('courseTITLE').innerHTML = 'Computer Programming 2';
    document.getElementById('firstToExpand').querySelectorAll('h5')[1].style.backgroundColor = "rgba(213, 1, 91, 1)";
}

function fysswbF() {
    offAllSections();
    resetHIGHLIGHTED();
    fysswb.style.display = 'block';
    document.getElementById('courseTITLE').innerHTML = 'Web Development';    
    document.getElementById('firstToExpand').querySelectorAll('h5')[2].style.backgroundColor = "rgba(213, 1, 91, 1)";
}

// LOWER SECTIONS

function showProject() {

    var projectDIV = document.getElementsByClassName("projectLS");
    var defenseDIV = document.getElementsByClassName("defenseLS");
    var twoChoices = document.getElementsByClassName("twoChoices");


    for (var i = 0; i < projectDIV.length; i++) {
        projectDIV[i].style.display = 'block';

        // twoChoices[i].getElementsByTagName("h1")[1];

        twoChoices[i].getElementsByTagName("h1")[0].style.borderTop = '1px solid rgba(213, 1, 91, 1)';
        twoChoices[i].getElementsByTagName("h1")[0].style.borderRight = '1px solid rgba(213, 1, 91, 1)';
        twoChoices[i].getElementsByTagName("h1")[0].style.borderLeft = '1px solid rgba(213, 1, 91, 1)';
        twoChoices[i].getElementsByTagName("h1")[0].style.borderBottom = '1px solid black';
        twoChoices[i].getElementsByTagName("h1")[0].style.color = 'white';

        twoChoices[i].getElementsByTagName("h1")[1].style.borderTop = 'none';
        twoChoices[i].getElementsByTagName("h1")[1].style.borderRight = 'none';
        twoChoices[i].getElementsByTagName("h1")[1].style.borderLeft = 'none';
        twoChoices[i].getElementsByTagName("h1")[1].style.borderBottom = 'none';
        twoChoices[i].getElementsByTagName("h1")[1].style.color = 'rgba(213, 1, 91, 1)';

        // ----------------------------------------

        defenseDIV[i].style.display = 'none';
    }

    // border-top: 1px solid rgba(213, 1, 91, 1);
    // border-left: 1px solid rgba(213, 1, 91, 1);
    // border-right: 2px solid rgba(213, 1, 91, 1);
    // border-bottom: 1px solid black;

}

function showDefense() {
    var projectDIV = document.getElementsByClassName("projectLS");
    var defenseDIV = document.getElementsByClassName("defenseLS");
    var twoChoices = document.getElementsByClassName("twoChoices");

    for (var i = 0; i < projectDIV.length; i++) {
        projectDIV[i].style.display = 'none';

        twoChoices[i].getElementsByTagName("h1")[1].style.borderTop = '1px solid rgba(213, 1, 91, 1)';
        twoChoices[i].getElementsByTagName("h1")[1].style.borderRight = '1px solid rgba(213, 1, 91, 1)';
        twoChoices[i].getElementsByTagName("h1")[1].style.borderLeft = '1px solid rgba(213, 1, 91, 1)';
        twoChoices[i].getElementsByTagName("h1")[1].style.borderBottom = '1px solid black';
        twoChoices[i].getElementsByTagName("h1")[1].style.color = 'white';


        twoChoices[i].getElementsByTagName("h1")[0].style.borderTop = 'none';
        twoChoices[i].getElementsByTagName("h1")[0].style.borderRight = 'none';
        twoChoices[i].getElementsByTagName("h1")[0].style.borderLeft = 'none';
        twoChoices[i].getElementsByTagName("h1")[0].style.borderBottom = 'none';
        twoChoices[i].getElementsByTagName("h1")[0].style.color = 'rgba(213, 1, 91, 1)';


        // ----------------------------------------

        defenseDIV[i].style.display = 'block';
    }

    // border-top: 1px solid rgba(213, 1, 91, 1);
    // border-left: 1px solid rgba(213, 1, 91, 1);
    // border-right: 2px solid rgba(213, 1, 91, 1);
    // border-bottom: 1px solid black;

}

// HOVER ERROR

// const twoChoices = document.getElementsByClassName('twoChoices').getElementsByTagName('h1');

// twoChoices.addEventListener('mouseover', () => {

//     for(var i = 0; i < twoChoices.length; i++){

//         if(twoChoices.style.color === "white"){
//             twoChoices.style.color = "rgba(213, 1, 91, 1)";
//         }else{
//             twoChoices.style.color = "white";
//         }

//     }

//     element.style.color = 'blue';
// });

// twoChoices.addEventListener('mouseout', () => {
//     element.style.color = 'red';
// });

// HOVER !!!!!!!!!ERRRORRRRRRRRR

// const twoChoices = document.querySelector('.twoChoices');

// twoChoices.addEventListener('mouseover', () => {
//     twoChoices.style.color = 'red'; // Set hover color
// });

// twoChoices.addEventListener('mouseout', () => {
//     twoChoices.style.color = ''; // Reset to default or class color
// });

