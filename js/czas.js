function odliczanie()
	{
		var dzisiaj = new Date();

		const tablica = [];
		tablica[0] = ['"Pracuj, aby się stawać, nie aby zdobywać."</br>', '', 'ELBERT HUBBARD'];
		tablica[1] = ['"Pomysły są powszechnym towarem.</br>','Wprowadzanie ich w życie nie jest."', 'MICHAEL DELL, Dell CEO'];
		tablica[2] = ['"Ponoś porażki często, abyś mógł</br>', 'odnieść sukces szybciej."', 'TOM KELLEY, Ideo'];
		tablica[3] = ['"Jeśli nie możesz robić rzeczy wielkich,</br>', 'rób małe rzeczy w wielki sposób."', 'NAPOLEON HILL'];
		tablica[4] = ['"Sukces to nie to, co masz,</br>', 'ale to, kim jesteś."', 'BO BENNET'];
		tablica[5] = ['"Wybierz pracę, którą kochasz, a nie przepracujesz</br>', 'ani jednego dnia więcej w Twoim życiu."', 'KONFUCJUSZ'];

		var linia1;
		var linia2;
		var autor;
				
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		if (godzina=="00") godzina = "24";
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		if (sekunda<=10) {linia1 = tablica[0][0];linia2 = tablica[0][1];autor = tablica[0][2];} else {
		if (sekunda<=20) {linia1 = tablica[1][0];linia2 = tablica[1][1];autor = tablica[1][2];} else {
		if (sekunda<=30) {linia1 = tablica[2][0];linia2 = tablica[2][1];autor = tablica[2][2];} else {
		if (sekunda<=40) {linia1 = tablica[3][0];linia2 = tablica[3][1];autor = tablica[3][2];} else {
		if (sekunda<=50) {linia1 = tablica[4][0];linia2 = tablica[4][1];autor = tablica[4][2];} else {
		if (sekunda<60) {linia1 = tablica[5][0];linia2 = tablica[5][1];autor = tablica[5][2];}}}}}}
		
		document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
		document.getElementById("linia1").innerHTML = linia1;
		document.getElementById("linia2").innerHTML = linia2;
		document.getElementById("autor").innerHTML = autor;
		 
		 setTimeout("odliczanie()",1000);
		
	}