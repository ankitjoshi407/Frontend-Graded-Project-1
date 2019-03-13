function func2()
{
    var modal=document.getElementById('myModal');
    var modal1=document.getElementById('signupmodal');
    modal1.style.display="block";
    modal.style.display="none";
}
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("signin");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//For signup modal
var m = document.getElementById('signupmodal');

// Get the button that opens the modal
var b = document.getElementById("SignUp");

// Get the <span> element that closes the modal
var s = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal 
b.onclick = function() {
  m.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
s.onclick = function() {
  m.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == m) {
    m.style.display = "none";
  }
}
function func1()
{
 window.location.href="html/bloglist.html";
}

var f=document.getElementById('tagline');
f.style.fontSize='14px';