// login knop //
var loginButton = document.getElementById('account');
var kruisklik = document.getElementById('sluit');

function openLogin() {
    var formulier = document.getElementById('login');
    login.classList.add('toonForm');
}

function sluitLogin () {
    var formulier = document.getElementById('login');
    login.classList.remove('toonForm');
}

// zoekbalk //
var zoekknop = document.getElementById('vergrootglas');
var kruisklik = document.getElementById('kruisklik');

function openZoek() {
    var body = document.body;
    body.classList.add('open-zoekbalk');
}

function sluitZoek() {
    var body = document.body;
    body.classList.remove('open-zoekbalk');
}


// lees meer knop in artikel //
var dots = document.getElementById('dots');
var meerTekst = document.getElementById('more');
var buttonTekst = document.getElementById('myBtn');

function readMore() {
    if (dots.style.display === 'none') {
        /* dots element wordt inline weergegeven, met de tekst: lees meer in de button en het meerTekst element wordt niet weergeven */
        dots.style.display = 'inline';
        buttonTekst.innerHTML = 'Lees meer';
        meerTekst.style.display = 'none';
    } else {
        /* dots element wordt niet weergeven, met de tekst: lees minder in de button en het meerTekst element wordt inline weergegeven */
        dots.style.display = 'none';
        buttonTekst.innerHTML = 'Lees minder';
        meerTekst.style.display = 'inline';
    }
}


/* favorieten */
var duimOmhoog = document.getElementById('duimOmhoog');
var duimOmlaag = document.getElementById('duimOmlaag');
var teller = document.getElementById('aantalDuimpjes');

function duimOmhoogGeklikt() {
    duimOmhoog.classList.toggle('geklikt');
    // zodat hartje weer leeg wordt //
    duimOmlaag.classList.remove('geklikt');
    // kijken of het hartje gevuld is of niet //

    if (duimOmhoog.classList.contains('geklikt')) {
        teller.innerHTML = '+10 likes'
    }
    else {
        teller.innerHTML = '+9 likes'
    }
}

function duimOmlaagGeklikt() {
    duimOmlaag.classList.toggle('geklikt');
    // zodat hartje weer leeg wordt //
    duimOmhoog.classList.remove('geklikt');
    // kijken of het hartje gevuld is of niet //

    if (duimOmlaag.classList.contains('geklikt')) {
        teller.innerHTML = '+8 likes'
    }
    else {
        teller.innerHTML = '+9 likes'
    }
}



/* event listeners */
loginButton.addEventListener('click', openLogin);
kruisklik.addEventListener('click', sluitLogin);
vergrootglas.addEventListener('click', openZoek);
kruisklik.addEventListener('click', sluitZoek);
duimOmhoog.addEventListener('click', duimOmhoogGeklikt);
duimOmlaag.addEventListener('click', duimOmlaagGeklikt);





/* meerknopje dropdown menu

<span class="material-icons">
arrow_drop_up
</span>
*/
