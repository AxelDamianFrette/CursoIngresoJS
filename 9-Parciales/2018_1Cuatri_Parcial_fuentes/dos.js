function mostrar()
/*alert("el precio del producto en efectivo es :$ xxxx, con tarjeta tiene un recargo del 10% que seria $xx de recargo, costandole fianl $xxx") */ 

{
	var precioProducto;
	var recargoTarjeta;
	var precioFinal;

	precioProducto=prompt("ingrese el precio del producto");
	precioProducto=parseInt(precioProducto);

	recargoTarjeta= precioProducto *10/100;

	precioFinal= precioProducto + recargoTarjeta;

	alert("el precio del producto en efectivo es "+ precioProducto +" con tarjeta tiene un recargo del 10% que seria " + recargoTarjeta + " de recargo, costandole finalmente " + precioFinal);
  
}
