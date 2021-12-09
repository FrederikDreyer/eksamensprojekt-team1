console.log("det virker");

function mobilNav() {
  let nav = document.getElementById('nav_mobil');
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
