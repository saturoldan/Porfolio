function iniciar(){
	const menuDesplegable= document.getElementById('menuDesplegable');
	const rightContent= document.getElementById('rightContent');
	const wrapper= document.getElementById('wrapper');
	const menu=()=>{
		if (window.innerWidth <1000 || window.innerHeight <720){
			window.location = "https://www.joselroldan.com/porfolio/small/index.html";
		};
		menuDesplegable.addEventListener('click', ()=>{
            rightContent.classList.toggle('visible_menu')
        });
		function show_content (){
            document.getElementById("rightContent").classList.toggle("show");
       	};
    }
    menu();

    var flipbookEL = document.getElementById('flipbook');

	window.addEventListener('resize', function (e) {
		flipbookEL.style.width = '';
  		flipbookEL.style.height = '';
  		$(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
	});

		$(flipbookEL).turn({
    	autoCenter: true
	});
}

window.addEventListener("load", iniciar, false);
window.addEventListener("resize", iniciar, false);


