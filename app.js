
let ubicacionInicial = window.scrollY;
let nav = document.querySelector('#nav');

window.addEventListener('scroll', function() {
    let ubicacionActual = window.scrollY;
    //console.log(ubicacionActual);

    if (ubicacionInicial >= ubicacionActual) {
        //nav.setAttribute('style', 'top: 0px; border-bottom: solid 1px #27ABA2; box-shadow: 0 0 20px rgba(2, 187, 125, 0.5); transition: all 1s ease;');
        nav.setAttribute('style', 'top: 0px; transition: all 1s ease;');
    } else {
        nav.setAttribute('style', 'top: -80px; transition: top 1s ease;');
    }

    ubicacionInicial = ubicacionActual;
});
