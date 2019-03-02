var i=1;

function wPrawoCSS(element) {
  if (i==4) i=0;
  i++;
	var el = document.getElementById(element);
  if (i==1) el.className = 'oferta nowa1';
  if (i==2) el.className = 'oferta nowa2';
  if (i==3) el.className = 'oferta nowa3';
  if (i==4) el.className = 'oferta nowa4';
}

function wLewoCSS(element) {
  if (i==1) i=5;
  i--;
  var el = document.getElementById(element);
  if (i==1) el.className = 'oferta nowa1';
  if (i==2) el.className = 'oferta nowa2';
  if (i==3) el.className = 'oferta nowa3';
  if (i==4) el.className = 'oferta nowa4';
}