function setup_carrocel()
{
	$('.owl-carousel').owlCarousel(
	{
	    loop:false,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:2
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


function playvideo(numLegado)
{
	num = numLegado;
	var cliente = "";

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() 
	{
		if( (xmlhttp.readyState == 4) && (xmlhttp.status == 200) ) 
	  	{
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
}

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
	    		elementos = elementos + '<div class="item"><img class="box-filme" src="imagens/carrocel/' + cliente[i].imagem_carrocel + '"></div>';
			}

	    	elementos = '<div class="owl-carousel owl-theme">' + elementos + '</div>';
            document.querySelector('.carrossel-filmes').innerHTML = elementos;

			let item = document.querySelectorAll('.item');

			for (let index = 0; index < item.length; index++) 
			{
				const element = item[index];
				
				element.addEventListener('mouseover', function(e)
				{
					playvideo(index);
				})

				element.addEventListener('mouseout', function(e)
				{
					// stopvideo(numLegado)
					stopvideo(num);
				})
			}

	    	setup_carrocel();
	    }
	} 

	xmlhttp.open("POST", "js/teste_json.json", true);
	xmlhttp.send();
}

inplementar_elem_carro();

var num = 0;


function detect_play()
{
	if(document.querySelector('.filme-principal video').paused)
	{
		document.querySelector('.filme-principal video').style.display = 'none';
		document.querySelector('.filme-principal img').style.display = 'block';

		setTimeout(function()
		{
			document.querySelector('.filme-principal img').style.opacity = "1";		
		}, 500)
	}	 
}

setInterval(detect_play, 1000)



