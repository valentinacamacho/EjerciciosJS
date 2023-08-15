/**
 2 -Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
Ingresar objetivo de visita (turismo, comidas, museos)
Dependiendo de la opcion elegida
ejemplo1 (antioquia y comidas)
mostrar un alert("las comidas mas populares en antioquia son la bandeja paisa, arepa rellena etc" )
ejemplo 2: se ingreso cundinamarca y turismo
mostrar un alert(lugares para visitar en cundinamarca es monserrate, la candelaria etc)
alert("opcion no valida") en caso que no se ingrese alguna de las opciones
**/

alert("Digite uno de los departamentos: Cundinamarca, Quindío, Antioquia o Valle")
let departament = prompt("Ingrese un departamento")

alert("Digite uno de las aventuras o culturas de los departamentos: Turismo, Museos o Música")
let object = prompt("Ingresa que quieres indagar")

if(departament === null && departament === "" && object === null && object === "" ){
  alert("El departamento que ingresaste " + departament + " y la cultura que elegiste " + object + " son opciones invalidas")
}else{

  if (departament === "cundinamarca" && object === "turismo") {
    document.write("Lugares para visitar en " + departament + " Jardin Botánico, Monserrate, Parque simón Bolivar,La calendaria")
} else if( departament === "cundinamarca" && object === "museos"){
      document.write("Museos para visitar en el departamento de cundinamarca es museo Nacional, museo del oro, museo de Botero")
}else if(departament === "cundinamarca" && object == "música"){
     document.write("El tipo de música que se escucha en el departamento de " + departament+ " es musica popular,vallenato, salsa, meregue etc...")
}else{
  if (departament === "quindío" || departament === "quindio" && object === "turismo"){
      document.write("Lugares para visitar en " + departament + " parque de la vida, parque bolivar, parque de los fundadores, parque sucre etc...")
  }else if(departament === "quindío" || departament === "quindio" && object === "museos"){
      document.write("Museos para visitar en el departamento de quindio es el Museo Quimbaya, Museo del Disco y Música etc...")
 }else if(departament === "quindío" || departament === "quindio" && object === "musica" || object === "música"){
      document.write("El tipo de música que se escucha en el departamento de " + departament+ " es el Bambuco, Bandola, Triple etc...")
 }else{
  if (departament === "antioquia" && object === "turismo") {
      document.write("Lugares para visitar en " + departament + " ir al metroclable de medellín, piedra de peñol y laguna de Guatape etc.. ")
  } else if(departament === "antioquia" && object === "museos"){
      document.write("En el departamento se puede ir al Museo de Antioquia, Museo del agua, Museo del catillo entre otros etc...")
  } else if(departament === "antioquia" && object === "musica" || object === "música"){
      document.write("El tipo de música que escucha el departamento de Antioquia es mÚsica andina,trova paisa, músicfa carrilera, música guasca entre otras etc..")
  }else{
    if(departament === "valle" && object === "turismo"){
      document.write("Lugares para visitar en " + departament + " ir al Barrio de San Antonio, Cristo Rey, iglesia la Ermita entre otros")
    }else if(departament === "valle" && object === "museos"){
      document.write("museos para visitar en el departamento del valle del cauca es Museo arqueológico la Merced, Museo del oro calima, Museo Callwood entre otros ")
    }else if(departament === "valle" && object === "musica" || object === "música"){
      document.write("El currulao es un ritmo propio del Pacifico colombiano principalmente de los departamentos del Valle del Cauca")
    }else{
        alert("Por favor seguir la instrucción")
    }
  }
 }
}
}