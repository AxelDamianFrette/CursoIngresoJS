 /*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoInicial;
	var aumento;
	var sueldoFinal;

	sueldoInicial= sueldo.value;
	sueldoInicial=parseInt(sueldoInicial);

	aumento=sueldoInicial *10/100;

	sueldoFinal= sueldoInicial + aumento;

	resultado.value=( sueldoFinal );
}
