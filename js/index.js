// Your code goes here
// Select elements from the DOM


// Event listener: mouseover

const nav = document.querySelector('.nav-container')
nav.addEventListener('mouseover', function(event){
 event.target.style.color = '#fc7703';

 setTimeout(function(){
  event.target.style.color = '';
 }, 500);
}, false);



const homeColor = document.querySelectorAll('h2')

for(let i=0; i<homeColor.length; i++){
homeColor[i].addEventListener('mouseover', function(event){
 event.target.style.color = '#fc7703';

 setTimeout(function(){
  event.target.style.color = '';
 }, 500);
}, false);
}

// Event listener: Focus and Blur - NOT WORKING

const signButton = document.querySelectorAll('div.btn')

for(let i=0; i<signButton.length; i++){
signButton[i].addEventListener("focus", function(event){
 event.target.style.background='red';
}, true);

signButton[i].addEventListener("blur", function(event){
 event.target.style.background='';
}, true);
}

 



// bg color
const navBg = document.querySelector('.main-navigation')
navBg.style.background = '#FECDAA'

const bodyBg = document.querySelector('body')
bodyBg.style.background = '#F8FFF4'


// Event listener: dblclick

const pickDest = document.querySelector('.content-destination h2')
pickDest.textContent = "Double Click Here and Pick Your Destination !";
pickDest.addEventListener('dblclick', function (e) {
 alert('Our options: Hawaii, Tahiti, Paris, Chile');
});


// Event listener: dblclick

document.addEventListener("load", (event) => {
 if (event.target.load === "loading") {
  console.log("Loading!");
 }
})