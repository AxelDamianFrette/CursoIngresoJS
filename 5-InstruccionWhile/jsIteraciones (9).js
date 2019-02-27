function mostrar()
{

	var nota
	contador=0
	
		nota=prompt("error");
		nota=pasrseInt(nota);
		while( isNan(nota)==true || nota=0 || nota=10)
		{

			nota=prompt("error");
			nota=pasrseInt(nota);
		}
		alert(nota);




}//FIN DE LA FUNCIÓN