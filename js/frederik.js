console.log("det virker 2");

let alle = document.getElementsByClassName('alle');
let sundhed = document.getElementsByClassName('sundhed');
let samfund = document.getElementsByClassName('samfund');
let internationalt = document.getElementsByClassName('internationalt');
let historie = document.getElementsByClassName('historie');

// Viser alle begivenhederne

function alleFilter() {

  for (let i = 0; i < alle.length; i++) {
    alle[i].style.display = "block";
  }
}

// Viser alle dem med sundhed som class

function findSundhed() {

  for (let i = 0; i < alle.length; i++) {
    alle[i].style.display = "none";
  }

  for (let i = 0; i < sundhed.length; i++) {
    sundhed[i].style.display = "block";
  }
}

function findSamfund() {

  for (let i = 0; i < alle.length; i++) {
    alle[i].style.display = "none";
  }

  for (let i = 0; i < samfund.length; i++) {
    samfund[i].style.display = "block";
  }
}

function findInternationalt() {

  for (let i = 0; i < alle.length; i++) {
    alle[i].style.display = "none";
  }

  for (let i = 0; i < internationalt.length; i++) {
    internationalt[i].style.display = "block";
  }
}

function findHistorie() {

  for (let i = 0; i < alle.length; i++) {
    alle[i].style.display = "none";
  }

  for (let i = 0; i < historie.length; i++) {
    historie[i].style.display = "block";
  }
}
