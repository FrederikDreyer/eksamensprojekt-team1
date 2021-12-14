let kort = document.getElementById('kort');
let dato = document.getElementById('dato');
let cvc = document.getElementById('cvc');

let error = document.getElementById('error');

let borderColors = ["3px solid red","1px solid grey"];


function checkValidate() {

  if (kort.value.length == 0 && dato.value.length == 0 && cvc.value.length == 0) {
    error.innerHTML = "Mangler kortnummer, MM/ÅÅ & CVC"
    kort.style.border = borderColors[0]
    dato.style.border = borderColors[0]
    cvc.style.border = borderColors[0]
  }

  else if (kort.value.length != 0 && dato.value.length == 0 && cvc.value.length == 0) {
    error.innerHTML = "Mangler MM/ÅÅ & CVC"
    kort.style.border = borderColors[1]
    dato.style.border = borderColors[0]
    cvc.style.border = borderColors[0]
  }

  else if (kort.value.length != 0 && dato.value.length != 0 && cvc.value.length == 0) {
    error.innerHTML = "Mangler CVC"
    kort.style.border = borderColors[1]
    dato.style.border = borderColors[1]
    cvc.style.border = borderColors[0]
  }

  else if (kort.value.length != 0 && dato.value.length == 0 && cvc.value.length != 0) {
    error.innerHTML = "Mangler dato"
    kort.style.border = borderColors[1]
    dato.style.border = borderColors[0]
    cvc.style.border = borderColors[1]
  }

  else if (kort.value.length == 0 && dato.value.length != 0 && cvc.value.length != 0) {
    error.innerHTML = "Mangler kortnummer"
    kort.style.border = borderColors[0]
    dato.style.border = borderColors[1]
    cvc.style.border = borderColors[1]
  }

  else if (kort.value.length == 0 && dato.value.length != 0 && cvc.value.length == 0) {
    error.innerHTML = "Mangler kortnummer og CVC"
    kort.style.border = borderColors[0]
    dato.style.border = borderColors[1]
    cvc.style.border = borderColors[0]
  }

  else if (kort.value.length == 0 && dato.value.length == 0 && cvc.value.length != 0) {
    error.innerHTML = "Mangler kortnummer og CVC"
    kort.style.border = borderColors[0]
    dato.style.border = borderColors[0]
    cvc.style.border = borderColors[1]
  }

  else if (kort.value.length != 0 && dato.value.length != 0 && cvc.value.length != 0) {
    window.location.href='tilmeld_bekraftelse.html'
  }

}

for(var i = 0; i < borderColors.length; i++) {
  console.log(borderColors[i])
}
