//Ejercicio de Logica
//.tolowerCase es una funcion para definir si son mayusculas o minisculas

let day = prompt("Ingrese día");

if (day === null || day === "") {
  alert(day + " Opción invalida");
} else {
  day = day.toLowerCase();
  if (
    day === "lunes" ||
    day === "martes" ||
    day === "miercoles" ||
    day === "miécoles" ||
    day === "jueves" ||
    day === "viernes"
  ) {
    alert("Es un dia entre semana");
  } //if anidados
  else if (day === "sabado" || day === sábado || day === "domingo") {
    alert("Es un fin de semana");
  } else {
    alert("Por favor ingresar dias a la semana");
  }
}

/**
 * Notas
 * 1- Mayusculas (x)
 * 2- palabras que no son días (x)
 * 3- vacio(x)
 * 4- nulos(x)
 * 5- tildes(x)
 *
 * Diagramas de flujo
 */
