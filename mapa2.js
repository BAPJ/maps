// JavaScript Document

function Mapa(){
	opcoesMapa = {
		center: {lat:50,lng:40},
		zoom: 2,	
	};
	
	var mapa = new google.maps.Map(document.getElementById("mapaDisplay"),opcoesMapa);
	
	opcoesMarker = {//definições para o objeto
		position: {lat:50,lng:40},//-> importante
		title: "Local A",
		map: mapa,//-> important 
	};
	
	var marca = new google.maps.Marker(opcoesMarker);//objeto do marcador
	
	
	marca.addListener("click",function(){
		
		document.getElementById("janela").style.display = "block";
		
		});
		
	function ratoArgumento(latlng,map){//função com argumentos
		var marca2 = new google.maps.Marker({
				position: latlng,//-> important 
				map: map,//-> important 
			});
		
	}
	
	mapa.addListener("click",function(e){//evento addListener para receber dados do rato 'e'
			ratoArgumento(e.latLng, mapa);//lê as coordenadas do rato 'e'
		});
	
	
	
	google.maps.event.addDomListener(document.getElementsByTagName("button")[1],"click", function(){//botao hybrid
			mapa.setMapTypeId(google.maps.MapTypeId.HYBRID);});
	google.maps.event.addDomListener(document.getElementsByTagName("button")[2],"click", function(){//botao roadmap
			mapa.setMapTypeId(google.maps.MapTypeId.ROADMAP);});
	google.maps.event.addDomListener(document.getElementsByTagName("button")[3],"click", function(){//botao satellite
			mapa.setMapTypeId(google.maps.MapTypeId.SATELLITE);});
	google.maps.event.addDomListener(document.getElementsByTagName("button")[4],"click", function(){//botao terrain
			mapa.setMapTypeId(google.maps.MapTypeId.TERRAIN);});
			
			
	//xmlhttprequest
	
	
	var xml = new XMLHttpRequest();
	
	
	xml.onreadystatechange = function(){
		if(xml.readyState == 4 && xml.status == 200){
			console.log(xml);
			var documento = xml.responseXML;
			
			console.log(documento.getElementsByTagName("local").length);
			
			for(var i= 1;i <= documento.getElementsByTagName("local").length; i++){
				var marcador = new google.maps.Marker({
					
					position: {lat:Number(documento.getElementsByTagName("local")[i-1].getAttribute("lat")), 
								lng:Number(documento.getElementsByTagName("local")[i-1].getAttribute("lng"))},
					map: mapa,
					
					
					
					});
			}
			
		}
		
		
		};
	
	
	xml.open("POST","location.xml",true);
	xml.send();
}