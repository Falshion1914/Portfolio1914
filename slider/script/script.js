var arrayRight = document.getElementsByClassName("slider-right-feedbacks") , arrayLeft = document.getElementsByClassName("slider-left-feedbacks"); // Right feedback and Left feedback block 
var rightButton = document.getElementsByClassName("right-container")[0] , leftButton =  document.getElementsByClassName("left-container")[0]; // Button Slider
var sliderContLeft = document.getElementsByClassName("slider-left-container")[0], sliderContRight = document.getElementsByClassName("slider-right-container")[0];
var tabMenu = document.getElementsByClassName("tabs");
var indicator = 0; //Number Slide
var sliderStop = false;

	function addClass(param , numbs, end) {
		if(sliderStop != true){
			sliderStop = true;
			sliderContRight.classList.add("animation-rotates");
			sliderContLeft.classList.add("animation-rotates");
			arrayRight[param + numbs].classList.add('animation-slide');
			arrayLeft[param + numbs].classList.add('animation-slide');
			tabMenu[param + numbs].classList.remove("click-tab");
			setTimeout(function(){
				arrayRight[param + numbs].classList.add('disable');
				arrayLeft[param + numbs].classList.add('disable');
				arrayRight[param + end].classList.add('active');
				arrayLeft[param + end].classList.add('active');	
				arrayRight[param + end].classList.remove('disable');
				arrayLeft[param + end].classList.remove('disable');
				arrayRight[param + end].classList.remove('animation-slide');
				arrayLeft[param + end].classList.remove('animation-slide');
				sliderContRight.classList.remove("animation-rotates");
				sliderContLeft.classList.remove("animation-rotates");
				tabMenu[param + end].classList.add("click-tab");
				sliderStop = false;
			},700);
		}else {

		}
	}


	function NewSlide(param) { // Next Slide Function
		if(sliderStop != true){
			if(param == arrayLeft.length){
				addClass(indicator,-1, -arrayLeft.length);
				indicator = 0;
			}else {
				addClass(indicator, -1, 0)
			}
		}else {

		}
	}
	function PrevSlide(param) { // Prev Slide Function
		if(param == -1){
			addClass(indicator, 1, arrayLeft.length);
			indicator = arrayLeft.length-1;
		}else {
			addClass(indicator, 1, 0)
		}
	}
	rightSlide = function () {	// Right Event
		if(sliderStop != true){
			indicator++;
			NewSlide(indicator);
		}else {

		}
	} 
	leftSlide = function () { //Left Event
		if(sliderStop != true){
			indicator--;
			PrevSlide(indicator);
		}else {

		}
	}
	function ResetSlider(params) {
			if(sliderStop != true){
			sliderStop = true;
			arrayRight[indicator].classList.add('animation-slide');
			arrayLeft[indicator].classList.add('animation-slide');
			sliderContRight.classList.add("animation-rotates");
			sliderContLeft.classList.add("animation-rotates");
			tabMenu[indicator].classList.remove("click-tab");
			setTimeout(function(){
				arrayRight[indicator].classList.add('disable');
				arrayLeft[indicator].classList.add('disable');
				arrayRight[indicator].classList.remove('active');
				arrayLeft[indicator].classList.remove('active');
				arrayRight[params].classList.add('active');
				arrayLeft[params].classList.add('active');	
				arrayRight[params].classList.remove('disable');
				arrayLeft[params].classList.remove('disable');
				arrayRight[params].classList.remove('animation-slide');
				arrayLeft[params].classList.remove('animation-slide');
				sliderContRight.classList.remove("animation-rotates");
				sliderContLeft.classList.remove("animation-rotates");
				tabMenu[params].classList.add("click-tab");
				sliderStop = false;
				indicator = params;
			},700)}else {

			}
	}
	
		tabMenu[0].onclick = function() {
			if(sliderStop != true){
				ResetSlider(0);
			}
		}
		tabMenu[1].onclick = function() {
			if(sliderStop != true){
				ResetSlider(1);
			}
		}
		tabMenu[2].onclick = function() {
			if(sliderStop != true){
				ResetSlider(2);
			}
		}
	

	leftButton.addEventListener("click", leftSlide);
	rightButton.addEventListener("click" , rightSlide);