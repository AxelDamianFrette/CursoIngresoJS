function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var pregunta;

	contador=0;
	acumulador=0;

	pregunta=prompt("¿Desea continuar?");
	respuesta="si";
	while(respuesta!="no")
	{
	respuesta=prompt("¿Desea continuar?");
	console.log(contador);
	contador=contador +1;
		if(respuesta=="no")
		{
			suma=acumulador+contador;
			break
		}
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

/* 
1º CONTADOR=0;
while(2ºCONTADOR<10)
{
	3º CONTADOR=CONTADOR +1;
}


CONTINUAR="si";
while(CONTINUAR!='si')


	respuesta=="si";
	while(respuesta!="no")
	{
	respuesta=prompt("¿Desea continuar?");
	contador=contador +1;
		if(respuesta=="no")
		{
			break
		}
	}

