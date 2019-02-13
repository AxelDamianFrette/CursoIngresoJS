/*al realizar una compra de mas de dos productos se realiza un descuento del 10%, y si supera los $2000 
se agrega un descuento adicional de 15%, si el pago es con tarjeta y no efectivo al precio final se le 
agrega un 10% de recargo) */

function mostrar()
{
	var Productos;
	var montodeCompra;
	var recargo;
	var descuentoUno;
	var descuentoDos;
	var tarjeta;
	var precioFinal;

	cantidadProductos= prompt("ingrese cantidad de productos adquiridos");
	cantidadProductos= parseInt(cantidadProductos);
    
    montodeCompra= prompt("ingrese el precio de su compra");
	montodeCompra=parseInt(montodeCompra);

	mendaje=

    if(productos>2)
	{
		descuentoUno= *10/100;
		precioFinal= precioFinal+ descuentoUno;
	}
	
	   if(montodeCompra> 2000)
       {
       	descuentoDos= *15/100;
    	precioFinal= precioFinal + descuentoDos;

       }
     
	     if(tarjeta==1)
	     {
		 recargo= *10/100;
         tarjeta= precioFinal + recargo;

         else
        	precioFinal=precioFinal
         }

         alert()

      
    
    
    

   
    

	



       
   

}
