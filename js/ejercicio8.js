/** Trabajo de Logíca
 * Ingresa un departamento(cundinamarca,quindio,antioquia, valle)
 * alert("opcion no valida")
 * Departammento de que departamento es? debe mostrar cual es la capital
 */

alert("Colocar el departamento Cundinamarca, quindío, antioquia o valle")
alert("Si colocas otras palabras va hacer invalido")

let departament = prompt("Ingrese un departamento")

if(departament === null || departament === ""){
    alert(departament + " Opción invalida");
}else{
    departament = departament.toLowerCase();
    if(departament === "cundinamarca"){
        alert("Departamento que ingresaste es: " +  departament + "\nLa capital es Bogotá ")
    }else if(departament === "quindio" || departament === "quindío"){
        alert("Departamento que ingresaste es: " + departament + "\nLa capital es Armenia")
    }else if(departament === "antioquia"){
        alert("Departamento que ingresaste es: " + departament + "\nLa capital es Medellín")
    }else if(departament === "valle"){
        alert("Departamento que ingresaste es: " + departament + "\nLa capital es Calí")
    }else{
        alert("Por favor seguir la instrucción")
    }
    
}

