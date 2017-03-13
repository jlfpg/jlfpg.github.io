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
		
		//Texto del enlace
		var textA =  document.createTextNode(arr[i].Titulo);
		
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
		Enlace.appendChild(textA);
		
		
		
		
	 }
	
}