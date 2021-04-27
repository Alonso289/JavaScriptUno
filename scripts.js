function parImpar(){
	
	var numero = prompt("Introduzca un numero: ");
	var resultado = "";
	if(numero % 2 == 0)
		resultado = "par";
	else
		resultado = "impar";
	
	alert("El numero es "+resultado);
		
}

function palindromo(){
	
	var palabra=prompt("Escribe una frase").toLowerCase();
	palabra.toLowerCase();
	var resultado = true;
	// eliminamos los espacios en blanco
	palabra=palabra.replace(/ /g, "");
 
	for (var i=0; i<palabra.length; i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			resultado = false;
		}
	}
 
	if(resultado)
		alert("Esto es palindromo");
	else
		alert("Esto no es palindromo");
}

function botonPulsado(boton){
	
	var id = boton.id;

    if(id === "Boton1"){
        document.getElementById("resultado").innerHTML= 'Ha pulsado el Boton1';
    }

    if(id === "Boton2"){
        document.getElementById("resultado").innerHTML= 'Ha pulsado el Boton2';
    }

    if(id === "Boton3"){
        document.getElementById("resultado").innerHTML= 'Ha pulsado el Boton3';
    }
}

function cambiaOrden(){
	var str = prompt("Introduzca una frase");
	var cambiada = "";
	for (var i = str.length - 1; i >= 0; i--)
	    cambiada += str[i];
    alert(cambiada);	  
}

