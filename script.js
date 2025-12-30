let popMsg = document.querySelector('.popUP');
let closeButton = document.querySelector('.close-btn');
let acceptButton = document.querySelector('.btn');



// if(localStorage.getItem('consent') === "Refused"){
// sayMsg();
// }  else if (localStorage.getItem('consent') === "Accepted") {
//     popMsg.classList.remove('active');
// }

// function sayMsg(){
// popMsg.classList.add('active');
// }
// setTimeout(sayMsg, 2000);


// function removePopUp(){
//     popMsg.classList.remove('active');
// }

// closeButton.addEventListener('click', removePopUp);
// acceptButton.addEventListener('click', removePopUp);

// acceptButton.addEventListener('click', ()=>{
// localStorage.setItem('consent', "Accepted")
// });

// closeButton.addEventListener('click', ()=>{
//     localStorage.setItem('consent', "Refused")
// });

function sayMsg(){
    popMsg.classList.add('active');
}

function removePopUp(){
    popMsg.classList.remove('active');
}

// check consent 
let consent = localStorage.getItem('consent');

if(consent !== "Accepted"){
    setTimeout(sayMsg, 1000);
};
acceptButton.addEventListener('click', ()=>{
    localStorage.setItem('consent', "Accepted");
    removePopUp();
});

closeButton.addEventListener('click', ()=>{
    localStorage.setItem('consent', "Refused");
    removePopUp();
});
