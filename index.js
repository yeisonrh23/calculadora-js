const numero1 = document.getElementById("n1");
const numero2 = document.getElementById("n2");
const operacion = document.getElementById("operacion");
const Vresultado = document.getElementById("resultado");


function calcular() {
    const Voperacion = operacion.value;
    const V1=parseInt(numero1.value);
    const V2=parseInt(numero2.value);
    let resultado;
  if (
    Voperacion == "+" ||
    Voperacion == "-" ||
    Voperacion == "*" ||
    Voperacion == "/"
  ) {

    switch (Voperacion) {
        case "+":
            resultado=V1+V2;
            console.log(resultado);
            break;
        case "-":
             resultado=(V1)-(V2);
             console.log(resultado);
             break;
        case "*":
             resultado=(V1)*(V2);
             console.log(resultado);
             break;
        case "/":
             resultado=(V1)/(V2);
             console.log(resultado);
             break;  
    }
    Vresultado.innerText=resultado;
  } else {
    console.log("Error");
  }
}
