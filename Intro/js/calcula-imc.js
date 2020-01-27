var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var alturaEhvalida = validaAltura(altura);
  var pesoEhvalido = validaPeso(peso);

  if (!pesoEhvalido) {
    tdPeso.textContent = "Peso Invalido";
    pesoEhvalido = false;
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhvalida) {
    tdAltura.textContent = "Altura Invalida";
    alturaEhvalida = false;
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEhvalida && pesoEhvalido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } /*else {
    paciente.querySelector(".info-imc").textContent =
      "Altura e/ou Peso Invalidos!";
  }*/
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}
