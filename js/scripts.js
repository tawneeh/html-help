$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("I already told you that this is a header!!! >:(")
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});