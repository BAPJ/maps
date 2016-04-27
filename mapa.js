// JavaScript Document

function Mapa(){
	
	opcoesMapa = {
		center: {lat:38.7859545,lng:-9.3333427},
		zoom: 14,
		backgroundColor: "#841800",
		disableDefaultUI: true,
		draggable: true,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		fullscreenControl: true,
	};
	
	var mapa = new google.maps.Map(document.getElementById("mapaDisplay"), opcoesMapa);
	
	opcoesMarca = {
		position: {lat:38.7859545,lng:-9.3333427},
		title: "A Minha Casa",
		map: mapa,
		animation: google.maps.Animation.DROP,
		//icon: "http://images6.fanpop.com/image/photos/38500000/Teacup-Pig-Icon-pigs-38574684-128-128.jpg",
		//label: {text: "C", color: "#00FF00", fontSize: "30px"},
		
	}
	
	var marca = new google.maps.Marker(opcoesMarca);	
		
	
}