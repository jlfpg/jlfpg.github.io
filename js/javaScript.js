var xmlhttp = new XMLHttpRequest();
var url = "json/info.json";

xmlhttp.onreadystatechange = function () {
	
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        mostrarContenido(myArr);
	}
};

xmlhttp.open("GET", url, true);
xmlhttp.send();


function mostrarContenido(arr){
	
	var id = document.getElementById("idCreate");
	 for (i = 0; i < arr.length; i++) {
		
		//Primer div contenedor
		var firstDiv = document.createElement("div");
		firstDiv.className = 'container';
		firstDiv.setAttribute('id', arr[i].Titulo);
		
		//imagen de dentro del Div
		var ImageDiv = document.createElement("img");
		ImageDiv.setAttribute('src', arr[i].img);
		ImageDiv.setAttribute('alt',"img");
		ImageDiv.className = 'image';
		
		//Overlay que almacena el texto y el enlace
		var Over = document.createElement("div");
		Over.className = 'overlay';
		
		//Div llamado text
		var Text = document.createElement("div");
		Text.className = 'text';
		
		//Informacion dentro del text(creamos una lista)
		var Lista = document.createElement("ul");
		var Elemento1 = document.createElement("li");
		var Elemento2 = document.createElement("li");
		var Elemento3 = document.createElement("li");
		var Elemento4 = document.createElement("li");
		var Elemento5 = document.createElement("li");
		var Elemento6 = document.createElement("li");
		var Elemento7 = document.createElement("li");
		var Elemento8 = document.createElement("li");
		var Contenido = document.createTextNode("Fecha: " + arr[i].Fecha);
		Elemento1.appendChild(Contenido);
		var Contenido = document.createTextNode("Descripcion: " + arr[i].Descripcion);
		Elemento2.appendChild(Contenido);
		var Contenido = document.createTextNode("Miembros del grupo: " + arr[i].Miembros);
		Elemento3.appendChild(Contenido);
		var Contenido = document.createTextNode("Asignaturas: " + arr[i].Asignaturas);
		Elemento4.appendChild(Contenido);
		var Contenido = document.createTextNode("Disponible: " + arr[i].Disponible);
		Elemento5.appendChild(Contenido);
		var Contenido = document.createTextNode("Destacado: " + arr[i].Destacado);
		Elemento6.appendChild(Contenido);
		var Contenido = document.createTextNode("Responsive: " + arr[i].Responsive);
		Elemento7.appendChild(Contenido);
		var Contenido = document.createTextNode("Visualización recomendada: " + arr[i].Visualizacion);
		Elemento8.appendChild(Contenido);
		
		
		//Texto del enlace
		var TextA =  document.createTextNode(arr[i].Titulo);
		
		//Y el enlace
		var Enlace = document.createElement("a");
		Enlace.setAttribute("href", arr[i].Link);
		Enlace.setAttribute("target", "blank");
		Enlace.className = 'link';
		
		//Enlace.createTextNode(arr[i].Titulo);
		
		//Creamos los nodos para que los elementos aparezcan
		id.appendChild(firstDiv);
		firstDiv.appendChild(ImageDiv);
		firstDiv.appendChild(Over);
		Over.appendChild(Text);
		Text.appendChild(Enlace);
		Enlace.appendChild(TextA);
		Text.appendChild(Elemento1);
		Text.appendChild(Elemento2);
		Text.appendChild(Elemento3);
		Text.appendChild(Elemento4);
		Text.appendChild(Elemento5);
		Text.appendChild(Elemento6);
		Text.appendChild(Elemento7);
		Text.appendChild(Elemento8);
	
	}
}