// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
// For the summary menus
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


// Audio  Wars of browsers
 function PlaySound(soundobj) {
        var thissound = document.getElementById(soundobj);
        thissound.play();
      }

      function StopSound(soundobj) {
        var thissound = document.getElementById(soundobj);
        thissound.pause();
        thissound.currentTime = 0;
      }

