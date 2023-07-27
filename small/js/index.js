function iniciar(){
	const menuDesplegable= document.getElementById('menuDesplegable');
	const rightContent= document.getElementById('rightContent');
	const wrapper= document.getElementById('wrapper');
	const menu=()=>{
		if (window.innerWidth >1000 && window.innerHeight >670){
			window.location = "https://www.joselroldan.com/porfolio/index.html";
		};
		menuDesplegable.addEventListener('click', ()=>{	
            rigthContent.classList.toggle('visible_menu');
        });
		/*function show_content (){
            document.getElementById("rightContent").classList.toggle("show");
       	};*/
    }
    menu();
}

window.addEventListener("load", iniciar, false);
window.addEventListener("resize", iniciar, false);