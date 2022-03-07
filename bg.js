const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');
const button = document.querySelector('button');

const initialGradient = window.getComputedStyle(body).backgroundImage;
css.textContent = initialGradient + ';';

function setGradient(){
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ';';
	button.style.background = `linear-gradient(to right, ${color2.value}, ${color1.value})`;
}
function setRamdomGradient(col1,col2){
	body.style.background = `linear-gradient(to right, ${col1}, ${col2})`;
	color1.value = col1;
	color2.value = col2;
	button.style.background = `linear-gradient(to right, ${col2}, ${col1})`;
	css.textContent = body.style.background + ';';
}
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
button.addEventListener('click', function(){
	var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
	var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
	console.log(randomColor1+" "+randomColor2);
	setRamdomGradient(randomColor1,randomColor2);


})