
var index = 1;

const dyplomy = [];
dyplomy[41] = ['image/Dyplomy/ProgramistaJavaWEB_1str_altkom.jpg', 'altkom']
dyplomy[40] = ['image/Dyplomy/ProgramistaJavaWEB_2str_altkom.jpg', 'altkom']
dyplomy[39] = ['image/Dyplomy/OcenaKompetencjiZawodowychDC_altkom.jpg', 'altkom']
dyplomy[38] = ['image/Dyplomy/RoleWZespoleProgramistycznym_altkom.jpg', 'altkom']
dyplomy[37] = ['image/Dyplomy/WzorceProjektoweNarzędziaPracyGrupowej_altkom.jpg', 'altkom']
dyplomy[36] = ['image/Dyplomy/AplikacjeWeboweWJezykuJava.jpg', 'altkom']
dyplomy[35] = ['image/Dyplomy/JavaDeveloper_strefaKursow.jpg', 'strefaKursow']
dyplomy[34] = ['image/Dyplomy/AdministratorBazDanych_strefaKursow.jpg', 'strefaKursow']
dyplomy[33] = ['image/Dyplomy/BazyDanychRelacyjneINierelacyjneJęzykSQL_altkom.jpg', 'altkom']
dyplomy[32] = ['image/Dyplomy/SzybkiKursHTML5CSS3_udemy.jpg', 'udemy']
dyplomy[31] = ['image/Dyplomy/PodstawyProgramowania-BackEnd_altkom.jpg', 'altkom']
dyplomy[30] = ['image/Dyplomy/KursMicrosoftSQLServerOdPodstaw_strefaKursow.jpg', 'strefaKursow']
dyplomy[29] = ['image/Dyplomy/KursMongoDBnowoczesneBazyDanych_strefaKursow.jpg', 'strefaKursow']
dyplomy[28] = ['image/Dyplomy/KursBazyDanychMySQLodPodstaw_strefaKursow.jpg', 'strefaKursow']
dyplomy[27] = ['image/Dyplomy/KursSQLnowoczesneBazyDanych_strefaKursow.jpg', 'strefaKursow']
dyplomy[26] = ['image/Dyplomy/Java-ambitnyStart-aplikacjaWebowa_udemy.jpg', 'udemy']
dyplomy[25] = ['image/Dyplomy/JavaPoziom2_strefaKursow.jpg', 'strefaKursow']
dyplomy[24] = ['image/Dyplomy/KursJAVAHibernateAplikacjeBazodanowe_strefaKursow.jpg', 'strefaKursow']
dyplomy[23] = ['image/Dyplomy/WprowadzenieDoGitIGitHub_udamy.jpg', 'udemy']
dyplomy[22] = ['image/Dyplomy/WireframingWithBalsamiq_udemy.jpg', 'udemy']
dyplomy[21] = ['image/Dyplomy/NajpopularniejszeBibliotekiJAVA_strefaKursow.jpg', 'strefaKursow']
dyplomy[20] = ['image/Dyplomy/SpringFrameworkOdPodstaw_strefaKursow.jpg', 'strefaKursow']
dyplomy[19] = ['image/Dyplomy/KursJAVATestyJednostkowe_strefaKursow.jpg', 'strefaKursow']
dyplomy[18] = ['image/Dyplomy/BeginnerJavaJavaFXMavenJenkins_udemy.jpg', 'udemy']
dyplomy[17] = ['image/Dyplomy/JavaOdPodstawDoEksperta_udemy.jpg', 'udemy']
dyplomy[16] = ['image/Dyplomy/JavaWzorceProjektowe_strefaKursow.jpg', 'strefaKursow']
dyplomy[15] = ['image/Dyplomy/JavaŚredniozaawansowana_strefaKursow.jpg', 'strefaKursow']
dyplomy[14] = ['image/Dyplomy/DobrePraktykiPracyWZespole_strefaKursow.jpg', 'strefaKursow']
dyplomy[13] = ['image/Dyplomy/KursJavaNarzędziaDevelopera_strefaKursow.jpg', 'strefaKursow']
dyplomy[12] = ['image/Dyplomy/JDBCandMySQL_udemy.jpg', 'udemy']
dyplomy[11] = ['image/Dyplomy/JDBCinSimpleWay _udemy.jpg', 'udemy']
dyplomy[10] = ['image/Dyplomy/FundamentyJezykaJava_strefaKursow.jpg', 'strefaKursow']
dyplomy[9] = ['image/Dyplomy/Certyfikat_codeORG.jpg', 'strefaKursow']
dyplomy[8] = ['image/Dyplomy/EComerceWPraktyce_uouw.jpg', 'uouw']
dyplomy[7] = ['image/Dyplomy/CertyfikatGIT_eduwebpl.jpg', 'pionowo']
dyplomy[6] = ['image/Dyplomy/KursProgramowaniaWJava_strefaKursow.jpg', 'strefaKursow']
dyplomy[5] = ['image/Dyplomy/AngOdZeraDoBohatIA2_uouw.jpg', 'uouw']
dyplomy[4] = ['image/Dyplomy/AngielskiPoLatachA1_uouw.jpg', 'uouw']
dyplomy[3] = ['image/Dyplomy/AngOdZeraDoBohatIIIA1A2_uouw.jpg', 'uouw']
dyplomy[2] = ['image/Dyplomy/JakCięWidząAutoprezentacja_uouw.jpg', 'uouw']
dyplomy[1] = ['image/Dyplomy/AngOdZeraDoBohatIIA1_uouw.jpg', 'uouw']
dyplomy[0] = ['image/Dyplomy/ScenaDlaKażdego_uouw.jpg', 'uouw']


const div = document.querySelector(".wstawiany");

for (let i = dyplomy.length - 1; i >= 0; i--) {
    var img = document.createElement('img');
    img.src = dyplomy[i][0];
    img.classList = dyplomy[i][1];
    img.alt = (dyplomy[i][0]).substr(14, (dyplomy[i][0]).length - 18);
    div.appendChild(img);
    // console.log('obrazek:', dyplomy[i][0], ' class:', dyplomy[i][1], ' i:', i)
}


var images = document.querySelectorAll('img');
// console.log('ilość dyplomów', dyplomy.length)

function showImage(n) {
    images[n].classList.add('visible');
}

function hideImage(n) {
    images[n].classList.remove('visible');
}

images[0].classList.add('visible');
showImage(1);

function update() {
    if (index === images.length - 1)
        index = 1;
    if (index === 1)
        index = images.length - 1;
}

function goNext() {
    hideImage(index);
    if (index === images.length - 1)
        index = 0;
    index++;
    showImage(index);
    // console.log(index)
}

function goPrev() {
    hideImage(index);
    if (index === 1)
        index = images.length;
    index--;
    showImage(index);
    // console.log(index)
}

var next = document.querySelector('#next');
var prev = document.querySelector('#prev');
next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);
