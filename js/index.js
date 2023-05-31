// Example JavaScript code for interactivity

// Get all the anchor tags
var anchors = document.getElementsByTagName("a");

// Loop through each anchor tag and add a click event listener
for (var i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the text of the clicked link
    var linkText = this.innerText;
    alert("You clicked: " + linkText);

    // Redirect to the linked page after a delay
    setTimeout(function() {
      var href = event.target.getAttribute("href");
      window.location.href = href;
    }, 1000); // Redirect after 1 second (1000 milliseconds)
  });
}