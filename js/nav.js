var list = document.getElementById('nav');
var toggleIcon = document.getElementById("icon");
var toggleBg = document.getElementById("bg-toggle");

window.onresize = function(event) {
    var w = window.innerWidth;

    if(w > 476){
    	list.style.display = "block";
    }else{
    	list.style.display = "none";
    }

    if(toggleIcon.classList.contains("fa-times")){
    	toggleIcon.classList.remove("fa-times");
		toggleIcon.classList.add("fa-bars");
    }
};

function toggleNav(){

	if(toggleIcon.classList.contains("fa-bars")){
		toggleIcon.classList.remove("fa-bars");
		toggleIcon.classList.add("fa-times");
		list.style.display = "block";
	}else{
		toggleIcon.classList.remove("fa-times");
		toggleIcon.classList.add("fa-bars");
		list.style.display = "none";
	}
}

