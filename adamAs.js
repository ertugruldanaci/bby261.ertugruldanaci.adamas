/* BBY261 Adam Asmaca Uygulaması */

var kelimeler = [
    { kelime: 'dokumantasyonmerkezi', ipucu: 'Bir tür bilgi merkezi' },
    { kelime: 'arşiv', ipucu: 'Belgelerin yaşam döngüsünü tamamladıktan sonra başlayan süreç. ' },
    { kelime: 'ünak', ipucu: 'Üniversite ve Araştırma Kütüphanecileri Derneği (kısa)' },
	{ kelime: 'vukuf', ipucu: 'Deneyimlerimizden oluşan ve başkasına aktarılamayan bilgi türü.' },
    { kelime: 'veritabanı', ipucu: 'Akademik makaleleri içeren elektronik kaynaklar.' },
    { kelime: 'atıfdizini', ipucu: 'WOS, Scopus gibi veritabanlarından önce aynı amaçla kullanılan basılı kaynaklar.' },
	{ kelime: 'gazeteer', ipucu: 'Coğrafi bilgi veren bir tür danışma kaynağı.'}
];
var alfabe =["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];
var secilenArr = kelimeSec()
var secilenKelime = secilenArr[0]
var secilenIpucu = secilenArr[1]
var uzunluk = secilenKelime.length
var hataSayisi = 0;
var kelimeDizi = new Array();

function hazirla(){
	if(uzunluk > 8){
		document.getElementById('kelime').style.fontSize = 400/uzunluk
	}
	for(var i=0; i<uzunluk; i++){
		kelimeDizi.push("_")
		document.getElementById('kelime').innerHTML += "<b>" + kelimeDizi[i] + " </b>"
    }
		document.getElementById('ipucu').innerHTML += "</br> İpucu: " + secilenIpucu + " </br></br>"
    adamAs()
    alfabeGoster()
}

function kelimeSec(){
	var index = Math.floor(Math.random() * kelimeler.length)
	return [kelimeler[index].kelime,kelimeler[index].ipucu]
}


function harfKonumu(harf){
	var dizi = secilenKelime.split("")
	var bulunan = new Array();
	for(var i=0; i<dizi.length; i++){
		if(dizi[i] == harf){
    		bulunan.push(i)
    	}
	}
return bulunan;
}

function varmi(harf){
    document.getElementById('kelime').innerHTML = ""
    document.getElementById(harf).innerHTML = ""
	if(harfKonumu(harf) == "" ){
        harfYok()
    }
    for(var i=0; i<uzunluk; i++){
            if(harfKonumu(harf).indexOf(i) == -1){
            	document.getElementById('kelime').innerHTML += "<b>" +kelimeDizi[i] + " </b>"
    		}
            else{
				document.getElementById('uyari').innerHTML = "Harf var :)"
				kelimeDizi[i] = harf;
            	document.getElementById('kelime').innerHTML += "<b>" +kelimeDizi[i] + " </b>"
				if(kelimeDizi.indexOf("_") == -1){
					document.getElementById('uyari').innerHTML="Tebrikler, Oyunu kazandiniz !"
					document.getElementById('alfabe').innerHTML=""
				}
            }
	}
}

function harfYok(){
	document.getElementById('uyari').innerHTML = "Harf yok :("
	hataSayisi = hataSayisi + 1
	if(hataSayisi == 6){
		document.getElementById('uyari').innerHTML = "Adam Asıldı"
		document.getElementById('alfabe').innerHTML = ""

		for(var i=0; i<alfabe.lengt; i++){
			document.getElementById('alfabe').innerHTML += '<p  id="' + alfabe[i] + '">' + alfabe[i] + ' </a>';
		}
	}
	adamAs()
}

function adamAs(){
	switch(hataSayisi) {
    	case 0:
        	document.getElementById('adam').src="0.png"
        break;
    	case 1:
        	document.getElementById('adam').src="1.png"
        break;
		case 2:
			document.getElementById('adam').src="2.png"
		break;
		case 3:
			document.getElementById('adam').src="3.png"
		break;
		case 4:
			document.getElementById('adam').src="4.png"
		break;
		case 5:
			document.getElementById('adam').src="5.png"
		break;
		case 6:
			document.getElementById('adam').src="6.png"
		break;
	}
}

function alfabeGoster(){
	for(var i=0; i<alfabe.length; i++){
		document.getElementById('alfabe').innerHTML += '<a class="links" id="' + alfabe[i] + '" href="javascript:varmi(' + "'" +  alfabe[i] + "'" + ')">' + alfabe[i] + ' </a>';
    }
}
