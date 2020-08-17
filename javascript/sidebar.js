//functions for making the sidebar appear and close
function openNav() {
  document.getElementById("homepageSidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("homepageSidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}