function mostrar()
{
//tomo la edad  
    var edadIngresada;

    edadIngresada=edad.value;
    edadIngresada=parseInt(edadIngresada);

    if(edadIngresada<17)
    {
	alert("usted es mayor de edad");
    }
    if(edadIngresada<13 || edadIngresada>17)
    {
    	alert("usted es adolescente");
    }
    if(edadIngresada>13)
    {
    	alert("usted es un niño");
    }




}//FIN DE LA FUNCIÓN