function expandOrReduceMenu(){
	if (window.matchMedia("(max-width: 950px)")){
		const elemento = document.getElementById("nav_menu-list");
		if (elemento.style.display != "block"){
			elemento.style.display = "block";
			elemento.classList.remove("nav_menu-list");
			elemento.classList.add("expand-nav_menu-list");
		}else{
			elemento.removeAttribute("style");
			elemento.classList.add("nav_menu-list");
			elemento.classList.remove("expand-nav_menu-list");
		}
	}
}