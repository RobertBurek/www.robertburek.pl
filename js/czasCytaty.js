const tablica = [];
tablica[0] = ['"Wybierz pracę, którą kochasz, a nie przepracujesz</br>', 'ani jednego dnia więcej w Twoim życiu."', 'KONFUCJUSZ'];
tablica[1] = ['"Pomysły są powszechnym towarem.</br>','Wprowadzanie ich w życie nie jest."', 'MICHAEL DELL, Dell CEO'];
tablica[2] = ['"Ponoś porażki często, abyś mógł</br>', 'odnieść sukces szybciej."', 'TOM KELLEY, Ideo'];
tablica[3] = ['"Jeśli nie możesz robić rzeczy wielkich,</br>', 'rób małe rzeczy w wielki sposób."', 'NAPOLEON HILL'];
tablica[4] = ['"Sukces to nie to, co masz,</br>', 'ale to, kim jesteś."', 'BO BENNET'];
tablica[5] = ['"Pracuj, aby się stawać, nie aby zdobywać."</br>', '', 'ELBERT HUBBARD'];
tablica[6] = ['"Okazje biznesowe są jak autobusy,</br>', 'zawsze przyjedzie następny."', 'RICHARD BRANSON'];
tablica[7] = ['"Twoi najbardziej niezadowoleni klienci</br>', 'są najlepszym źródłem do nauki."', 'BILL GATES, Microsoft'];
tablica[8] = ['"Nie to, co osiągasz, ale to, co przezwyciężasz,</br>', 'definiuje Twoją karierę."', 'CARLTON FISK'];
tablica[9] = ['"Skoro i tak będziesz myśleć,</br>', 'myśl odważnie."', 'DONALD TRUMP'];

var coIle = 15;
var i = Math.floor( Math.random() * ( tablica.length));
var dzisiaj = new Date();
var start = dzisiaj.getSeconds();

function odliczanie()
	{
		dzisiaj = new Date();

		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		if (godzina=="00") godzina = "24";
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
 		if (((start-sekunda)%coIle)==0) {
   			linia1 = tablica[i][0];
   			linia2 = tablica[i][1];
   			autor = tablica[i][2];
   			i++
   			if (i==tablica.length) i=0;
 		}
		
		document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
		document.getElementById("linia1").innerHTML = linia1;
		document.getElementById("linia2").innerHTML = linia2;
		document.getElementById("autor").innerHTML = autor;
		 
		 setTimeout("odliczanie()",1000);
		
	}