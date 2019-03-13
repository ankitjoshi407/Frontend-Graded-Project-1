var x=document.getElementById('tagline');
x.style.color='white';
x.style.fontSize='14px';

function redirect()
{
    window.location.href="post.html";
}

var mo = document.getElementById('delmod');

// Get the button that opens the modal
var bt = document.getElementById('trash');
var bt1= document.getElementById('trash2');
var bt2=document.getElementById('trash3');
var bt3=document.getElementById('trash4');
var bt4=document.getElementById('trash5');
// Get the <span> element that closes the modal
var sp = document.getElementById('nobtn');

// When the user clicks on the button, open the modal 
bt.onclick = function() {
   mo.style.display="block";
}
bt1.onclick = function() {
   mo.style.display="block";
}
bt2.onclick = function() {
   mo.style.display="block";
}
bt3.onclick = function() {
   mo.style.display="block";
}
bt4.onclick = function() {
   mo.style.display="block";
}

// When the user clicks on <span> (x), close the modal
sp.onclick = function() {
  mo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mo) {
    mo.style.display = "none";
  }
}