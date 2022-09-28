(function() {
  // Bind Click event to the drop down navigation button
  document.querySelector('.nav-button').addEventListener('click', function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
    this.parentNode.parentNode.classList.toggle('closed')
  }, false);
})();

(function() {
  // Bind Click event to the drop down navigation button
  document.querySelector('.nav-button1').addEventListener('click', function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
    this.parentNode.parentNode.classList.toggle('closed')
  }, false);
})();

(function() {
  // Bind Click event to the drop down navigation button
  document.querySelector('.nav-button2').addEventListener('click', function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
    this.parentNode.parentNode.classList.toggle('closed')
  }, false);
})();

//function to open and close side menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("check").style.marginLeft = "250px";
  // document.getElementById("check1").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("check").style.marginLeft = "0";
  // document.getElementById("check1").style.marginLeft = "0";
}



//NAVBAR
function openSidebar() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "0px";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}