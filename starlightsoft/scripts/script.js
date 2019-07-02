var left = document.getElementsByClassName("left-button")[0] , right = document.getElementsByClassName("right-button")[0];
var AllSlide = document.getElementsByClassName("first-slide");
var timer = 0;
for(var i = 1;i < AllSlide.length;i++){
	AllSlide[i].classList.add('disable');
}
left.onclick = function() {
	if(timer == 0){
		AllSlide[timer].classList.add('disable');
		AllSlide[timer].classList.remove('active');
		timer = AllSlide.length-1;
		AllSlide[timer].classList.remove('disable');
		AllSlide[timer].classList.add('active');
	}else{
		AllSlide[timer].classList.add('disable');
		AllSlide[timer].classList.remove('active');
		timer--;
		AllSlide[timer].classList.remove('disable');
		AllSlide[timer].classList.add('active');
	}
}
right.onclick = function() {
if(timer == AllSlide.length-1){
		AllSlide[timer].classList.add('disable');
		AllSlide[timer].classList.remove('active');
		timer = 0;
		AllSlide[timer].classList.remove('disable');
		AllSlide[timer].classList.add('active');
	}else{
		AllSlide[timer].classList.add('disable');
		AllSlide[timer].classList.remove('active');
		timer++;
		AllSlide[timer].classList.remove('disable');
		AllSlide[timer].classList.add('active');
	}
}