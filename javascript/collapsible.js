var coll = document.getElementsByClassName("collapsible");
var i;
console.log(coll[0])
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
  	console.log("hello")
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      console.log(content.style.display)
    } else {
      content.style.display = "block";
    }
  });
}
