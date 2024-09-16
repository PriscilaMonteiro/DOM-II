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

// Event listener: NOT WORKING

const signButton = document.querySelectorAll('.btn')

for(let i=0; i<signButton.length; i++){
 signButton[i].addEventListener("click", hereYouGo);
}

 function hereYouGo(){
  signButton.innerHTML = "Here you Go!";
 }



 // Event listener: scroll

 window.addEventListener('scroll', () =>{
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if(scrolled === scrollable) {
   alert("You've scrolled to the end");
  }
 });



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


// Event listener: load

const load = document.querySelector('.footer p')
window.addEventListener("load", (event) => {
 load.textContent ="Copyright Fun Bus 2020 - Page is fully Loaded!";
});

// Event listener: Resize


window.addEventListener('resize', funInTheSun);

var x = 0;
function funInTheSun(){
 var txt = x +=1;
 document.querySelector('.destination p').textContent = "Window resized " + txt + " times";
 
}


// Stop Propagation & Event Listener: Click
const div = document.querySelector('div.destination')
const btn = document.querySelector('div.btn')

div.addEventListener('click', function (event) {
    alert("div clicked: stop propagation");
    
});

btn.addEventListener('click', function (event) {
    event.stopPropagation()
    alert("btn clicked: stop propagation");
    
});
 
let changeSize = document.querySelector("img");
changeSize.addEventListener(
  "click",
  function(event) {
    // highlight the mouseover target
    event.target.style.borderRadius = "90px";
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.borderRadius = 0;
    }, 500);
  },
  false
);



