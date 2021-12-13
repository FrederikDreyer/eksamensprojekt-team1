//JS - Tanja
//Variabler af inputs i HTML - tekstfelter (variabler defineres udfra forskellige id i HTML)
var kort = document.getElementById('kort');
var dato = document.getElementById('dato');
var cvc = document.getElementById('cvc');

//Fejlbesked - henviser til et p-tag i HTML
var error = document.getElementById('error');

//Arrays er defineret i form af variabler og indeholder forskellige værdier

var borderColors = ["3px solid red","1px solid grey"];


//Funktionen henviser til onClick i HTML
//Følgende kode i funktionen eksekveres, når der trykkes på knappen
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

//Hvis i er mindre end arrayets længde, udføres en console log. Derefter plusses med 1, og arrayet starter forfra
for(var i = 0; i < borderColors.length; i++) {
  console.log(borderColors[i])
}
