canvas = document.getElementById("pintura");
ctx = canvas.getContext("2d");
var carroAltura = 115;
var carroLargura = 65;
var carroX = 5;
var carroY = 225;
backgroundImage = "parkingLot.jpg";
carro_image = "car2.png";
function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = backgroundImage
	carro_imgTag = new Image();
	carro_imgTag.onload = uploadCarro;
	carro_imgTag.src = carro_image;
}
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCarro() {
	ctx.drawImage(carro_imgTag, carroX, carroY, carroLargura, carroAltura);
}
window.addEventListener("keydown", myKeyDown);
window.addEventListener("keydown", myKeyDown)
function myKeyDown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38'){
			up();
			console.log("cima");
		}
		if(keyPressed == '40'){
			down();
			console.log("baixo");
		}
		if(keyPressed == '37'){
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39'){
			right();
			console.log("direita");
		}
}
function up(){
	if(carroY >= 0){
		carroY = carroY - 10;
		console.log("Tecla para cima foi pressionada, x = " + carroX + " / y = carroY");
		uploadBackground();
		uploadCarro();
	}
}
function down(){
	if(carroY <= 300){
		carroY = carroY + 10;
		console.log("Tecla para baixo foi pressionada, x = " + carroX + " / y = carroY");
		uploadBackground();
		uploadCarro();
	}
}
function left(){
	if(carroX > 0){
		carroX = carroX - 10;
		console.log("Tecla para esquerda foi pressionada, x = " + carroX + " / y = carroY");
		uploadBackground();
		uploadCarro();
	}
}
function right(){
	if(carroX <= 700){
		carroX = carroX + 10;
		console.log("Tecla para direita foi pressionada, x = " + carroX + " / y = carroY");
		uploadBackground();
		uploadCarro();
	}
}
