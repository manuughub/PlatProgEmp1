var pristine, formulario;
window.onload = function(){

	formulario = document.getElementById("formulario");
	pristine = new Pristine(formulario);

	formulario.addEventListener('submit', function(e) {
		e.preventDefault();
		console.log("test!");
		//revisar si el formulario si es valido
		var valid = pristine.validate(); //retorna verdadero o falso
	});
};