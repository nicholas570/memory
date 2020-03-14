//------------------------------------
function shuffle(tab){
    tab2 =[];
    for(let i =0;i<tab.length;i++){    
        
        do{
            // je genere un nb alea de 0 à taille du tableau
            x =    Math.floor(Math.random() * tab.length);
        }while(tab2[x] != undefined);
        // tant que l'emplacement n'est pas vide
        tab2[x] = tab[i];
    }
    return tab2;
}
//------------------------------------

// je rempli le tableau Javascript
var tab = [];
for(var i=0;i<42;i++){
	tab.push(i);
}
tab = shuffle(tab);
//var tab2 = tab.splice(0,16);// a partir
//de l indice 0 je prends 16 lignes
var tab2 =[];
for (var i =0; i<16;i++){
	tab2.push(tab[i]);
}
// je double le tableau de 16 tuiles
var tab3 = tab2.concat(tab2);
// je mélange le tableau
tab3 = shuffle(tab3);

// je parcours mon tableau JS pour l'afficher
for (var num of tab3){
	var str ='<div><img src="./classic/'
						+num+'.jpg" data-num='+num+' width="80"></div>';
	$('.container').append(str);		
}
var tricher = false;
var numero = -1;
var position = -1;
var win =0 ;
//----------------------------------------
$('.container img').click(function(){
	if (numero == -1){
		console.log('1er clique');
		numero = $(this).attr('data-num');
		position = $(this).parent().index();
		console.log(numero);
	}
	else{
		var numero2 = $(this).attr('data-num');
		var position2 =  $(this).parent().index();
		if (numero == numero2){
			if (tricher){
				$('img[data-num='+numero+']').hide();
				win++;
			}		
			else if (position != position2){// si les tuiles n'ont pas la mm postion
				// je viens cacher les tuiles
				$('img[data-num='+numero+']').hide();
				win++;
			}
		}
		numero = -1;
		console.log('2eme clique');
		console.log(numero2);
	}
	if (win ==16 ){
		alert('GAGNE !!!');
	}
});

$('#btnTricher').click(function(){
	if (tricher){
		tricher = false;
	}else{
		tricher = true;
	}

});

		