const copyright = document.getElementById("copyright");
const deskripsi = document.getElementById("deskripsi");
const power = document.getElementById("power");

power.addEventListener("click", function(){
	if(deskripsi.style.display == "none"){
		deskripsi.style.display = "block";
		deskripsi.innerHTML = "Ya ini juga content";
	}else{
		deskripsi.style.display = "none";
	}
});

copyright.addEventListener("mouseover", function(){
	$("#copyright").html("");
});