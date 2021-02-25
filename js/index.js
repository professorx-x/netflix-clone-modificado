//var cliente = "";

/*
function consulta_json(num, atri)
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() 
	{
		if( (xmlhttp.readyState == 4) && (xmlhttp.status == 200) ) 
	  	{
	    	var atribulto = [titulo, descricao, imagem_fundo, imagem_carrocel, video];


	    	var cliente = xmlhttp.responseText;
	    	cliente = JSON.parse(cliente); 
	    	//alert(cliente[num].atribulto[atri]);
	    	//alert(atri);
	    	alert(cliente[0].titulo);
	    	//return cliente[0].titulo;
	    	//return num;

	    }
	}    	


	xmlhttp.open("POST", "js/teste_json.json", true);
	xmlhttp.send();
}
*/


function setup_carrocel()
{
	$('.owl-carousel').owlCarousel(
	{
	    loop:false,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})
}	


function inplementar_elem_carro()
{
	var num = 0;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() 
	{
		if( (xmlhttp.readyState == 4) && (xmlhttp.status == 200) ) 
	  	{
	    	var elementos = "";
	    	var cliente = xmlhttp.responseText;
	    	cliente = JSON.parse(cliente); 
	    	num = cliente.length;

	    	for(var i = 0; i < num; i++)
	    	{
	    		elementos = elementos + '<div class="item" onmouseover="playvideo(' + i + ')" onmouseout="stopvideo(' + i + ')"><img class="box-filme" src="imagens/carrocel/' + cliente[i].imagem_carrocel + '"></div>';
	    	}

	    	elementos = '<div class="owl-carousel owl-theme">' + elementos + '</div>';

	    	//document.querySelector('#carrocel').innerHTML = elementos;
	    	document.querySelector('.carrossel-filmes').innerHTML = elementos;
	    	//alert(elementos)

	    	setup_carrocel();
	    }
	} 

	xmlhttp.open("POST", "js/teste_json.json", true);
	xmlhttp.send();
}

inplementar_elem_carro();

var num = 0;

/*
function stopvideo(numLegado)
{
	num = 0;
}
*/	

function playvideo(numLegado)
{
	num = numLegado;
	var cliente = "";

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() 
	{
		if( (xmlhttp.readyState == 4) && (xmlhttp.status == 200) ) 
	  	{
	    	//var atribulto = [titulo, descricao, imagem_fundo, imagem_carrocel, video];


	    	cliente = xmlhttp.responseText;
	    	cliente = JSON.parse(cliente); 
	    	document.querySelector('.filme-principal img').src = 'imagens/fundo/' + cliente[num].imagem_fundo;
	    	document.querySelector('.titulo').innerHTML = cliente[num].titulo;
	    	document.querySelector('.descricao').innerHTML = cliente[num].descricao;


			
			setTimeout(function()
			{
				document.querySelector('.filme-principal img').style.opacity = "0";
			}, 1000)

			setTimeout(function()
			{
				document.querySelector('.filme-principal img').style.display = 'none';
				document.querySelector('.filme-principal video').src = 'videos/' + cliente[num].video;
				document.querySelector('.filme-principal video').style.display = 'block';
			}, 1500)

			setTimeout(function()
			{
				document.querySelector('.filme-principal video').play();
			}, 2000)
		}
	}    	

	xmlhttp.open("POST", "js/teste_json.json", true);
	xmlhttp.send();


	/*
	var titulo = consulta_json(num, 0);
	var descricao = consulta_json(num, 1);
	var imagem_fundo = consulta_json(num, 2);
	var imagem_carrocel = consulta_json(num, 3);
	var video = consulta_json(num, 4);
	*/

	//alert(titulo); 
	//titulo;

	/*
	if(num == 0)
	{
		document.querySelector('.filme-principal video').pause();
	
		setTimeout(function()
		{
			document.querySelector('.filme-principal video').style.display = 'none';
			document.querySelector('.filme-principal img').style.display = 'block';
		}, 500)	
	}
	else
	{
		document.querySelector('.filme-principal img').src = 'imagens/fundo/' + imagem_fundo;
		//$('.filme-principal-midias img').css({'backgroundImage': 'url("imagens/fundo' + num + '.jpg")'}, 100);

		//alert('url("imagens/fundo' + num + '.jpg")');

		setTimeout(function()
		{
			document.querySelector('.filme-principal img').style.opacity = "0";
		}, 1000)

		setTimeout(function()
		{
			document.querySelector('.filme-principal img').style.display = 'none';
			document.querySelector('.filme-principal video').src = 'videos/' + video;
			document.querySelector('.filme-principal video').style.display = 'block';
		}, 1500)

		setTimeout(function()
		{
			document.querySelector('.filme-principal video').play();
		}, 2000)
	}	
	*/

	/*
	setTimeout(function()
	{
		document.querySelector('.filme-principal video').muted = false;
		document.querySelector('.filme-principal video').volume = 1.0;
	}, 1000)
	*/

	//alert(num);
}

/**/
function stopvideo(numLegado)
{
	num = numLegado;	
	document.querySelector('.filme-principal video').pause();
	document.querySelector('.filme-principal img').style.opacity = "1";
	
	setTimeout(function()
	{
		document.querySelector('.filme-principal video').style.display = 'none';
		document.querySelector('.filme-principal img').style.display = 'block';
	}, 500)	
	/**/

	//alert(num);	
}

function detect_play()
{
	if(document.querySelector('.filme-principal video').paused)
	{
		//alert("oi");
		
		document.querySelector('.filme-principal video').style.display = 'none';
		document.querySelector('.filme-principal img').style.display = 'block';

		setTimeout(function()
		{
			document.querySelector('.filme-principal img').style.opacity = "1";		
		}, 500)
	}	 
}

setInterval(detect_play, 1000)



