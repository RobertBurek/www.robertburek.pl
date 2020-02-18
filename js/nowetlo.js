var nr=1;
var ilePrac=6;

function wPrawoCSS(element) {
  if (nr==ilePrac) nr=0;
  nr=nr+1;
  var el = document.getElementById(element);
  el.className = 'oferta nowa'+nr;
  }

function wLewoCSS(element) {
  if (nr==1) nr=ilePrac+1;
  nr=nr-1;
  var el = document.getElementById(element);
  el.className = 'oferta nowa'+nr;
  //  Dodaj class .nowaX do arkuszy styli style.css
  //  oraz zmień ilePrac na nową wartość.
  }