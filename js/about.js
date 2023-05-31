// Add an event listener to the "About Me" paragraph
var aboutMe = document.querySelector("main p");
aboutMe.addEventListener("click", function() {
  alert("You clicked on the 'About Me' paragraph!");
});

// Change the background color of the navigation links on hover
var navLinks = document.querySelectorAll("nav a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "#007bff";
    this.style.color = "#fff";
  });
  navLinks[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "#007bff";
  });
}
