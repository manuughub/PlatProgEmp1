//preparar el lienzo
var pantalla = document.getElementById("galeria");
var lienzo = pantalla.getContext("2d");
var cantidadFotos= 3;
var imagenes =[];
var x=10;

//crear un objeto imagen y guardarlas en un arreglo
//for (i=1; i<=cantidadFotos;i++){
	//imagenes[i] = new Image();
	//imagenes[i].src = "img/img"+(i)+".png";
	//console.log(i);
	//imagenes[i].addEventListener("load", cargarImagen);
//}

var img = {
	cargaOk : []
};

for(i=1; i<=cantidadFotos;i++){
	img.cargaOk[i]=false;
	img.imagen= new Image();
	img.imagen.src = "img/img"+(i)+".png";
	img.imagen.addEventListener("load", carga);
}
	

function carga()
{
	img.cargaOk=true;
	cargarImagen();
}

function cargarImagen(){
	console.log(cantidadFotos);
		if (img.cargaOk)
			lienzo.drawImage(img.imagen,10,10);
			x=x+490;
	}
	
	//for (i=1; i<cantidadFotos;i++)
	//{
		//imagenes[i].onload = function(){
		//	lienzo.drawImage(imagenes[i],10,10); //para dibujar imagen en el canvas
		//los parametros de drawImage: (el objeto imagen, posición de la imagen en canvas)	
		//}
	//}
	