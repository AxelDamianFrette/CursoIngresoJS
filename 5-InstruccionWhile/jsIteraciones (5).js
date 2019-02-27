function mostrar()
{
	var sexo;
	
	sexo=prompt("ingrese f ó m");
	while( isNan(sexo)==false || sexo="f" || sexo="m")
	{
		sexo=prompt("error");
	}
	
	alert(sexo);
	respuesta=prompt("continuar")

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN