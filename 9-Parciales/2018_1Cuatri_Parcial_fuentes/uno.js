/*Ustedes son xxxx y xxxx , sus edades son xx y xx, y la suma de sus edades es xx) */

function mostrar()
{
	var persona1;
	var persona2;
	var edad1;
	var edad2;
	var suma;

     persona1 =prompt("ingrese su nombre aqui");
     edad1=prompt("ingrese edad de "+ persona1 );
     edad1=parseInt(edad1);

     persona2=prompt("ingrese su nombre aqui");
     edad2=prompt("ingrese edad de " + persona2);
     edad2=parseInt(edad2);

     suma= edad1+edad2;

     alert("ustedes son " + persona1 + persona2 + " sus edades son " + edad1 + edad2 + " y la suma de sus edades es " + suma ) ;


