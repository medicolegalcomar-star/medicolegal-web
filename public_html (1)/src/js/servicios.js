function expandOrReduce(id){
	const item = document.getElementById(id);
	if (item.children[1].classList.contains("services-menu__content--active")){
		item.children[1].classList.remove("services-menu__content--active");
		item.children[0].children[1].classList.remove("services-menu__item__content__img--rotate");
	}else{
		item.children[1].classList.add("services-menu__content--active");
		item.children[0].children[1].classList.add("services-menu__item__content__img--rotate");
	}
}