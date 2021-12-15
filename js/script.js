console.log("det virker");

function mobilNav() {
  let nav = document.getElementById('nav_mobil');
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

function navStyle() {
  let nav = document.getElementById('mobil_nav_style');
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
