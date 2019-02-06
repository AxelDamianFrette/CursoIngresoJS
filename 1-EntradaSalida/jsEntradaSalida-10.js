/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var descuento;
	var sueldoFinal;

	sueldo= importe.value;
	sueldo=parseInt(sueldo);

	descuento=sueldo *25/100;

	sueldoFinal= sueldo - descuento;

	resultado.value=( sueldoFinal );
	alert("su importe es: " + sueldoFinal);
}

