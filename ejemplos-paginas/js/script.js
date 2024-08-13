function cambiarTitulo() {
	var title = document.querySelector("#mainTitle");
    console.log(title);
	title.innerHTML +=
		"<br>This new <u>title</u> has been changed from JavaScript!";
}
function changeTitleCSSStyle() {
	var title = document.querySelector("#hobbyTitle");
	title.style.color = "#000000";
	title.style.backgroundColor = "#FFCC55";
	title.style.border = "5px dashed red";
}

function addSomeText() {
    console.log("JavaScript code executed");
    var myDiv = document.querySelector("#elemento-nuevo")
    myDiv.innerHTML += "<p>Párrafo agregado</p>";
    // document.body.innerHTML += "<br><p>Function executed!</p>";
}

function ejecutar() {
var x = 2;
// show a message in the body of the html document
document.body.innerHTML += "<b>JavaScript code executed. The value of the variable x is: " + x + "</b>";
// also print a message in the devtool console
}

/*
	1. changeTtitleCSSStyle es una función
	2. title es un objeto creado que equivale al elemento con id="mainTitle"
	3. style es una propiedad del objeto title. También es un objeto
	4. color es una propiedad del objeto stlyle
		4.1. backgroundColor es otra propieadad, equivalente a background-color de CSS. Pero en JavaScript el guión - tiene otra utilidad, por lo que no se puede usar una propiedad title.style.background-color
*/
