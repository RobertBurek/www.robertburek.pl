var i=1;
var ilePrac=4;

function wPrawoCSS(element) {
  if (i==ilePrac) i=0;
  i++;
  var el = document.getElementById(element);
  el.className = 'oferta nowa'+i;
  }

function wLewoCSS(element) {
  if (i==1) i=ilePrac+1;
  i--;
  var el = document.getElementById(element);
  el.className = 'oferta nowa'+i;
  //  Dodaj class .nowaX do arkuszy styli style.css
  //  oraz zmień ilePrac na nową wartość.
  }