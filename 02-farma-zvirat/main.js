let poleZvirat = [
    {jmeno: 'Kravička', foto: 'obrazky/krava.jpg'},
    {jmeno: 'Ovečka', foto: 'obrazky/ovce.jpg'},
    {jmeno: 'Husička', foto: 'obrazky/husa.jpg'},
    {jmeno: 'Kočka', foto: 'obrazky/kocka.jpg'},
    {jmeno: 'Kůň', foto: 'obrazky/kun.jpg'},
    {jmeno: 'Pejsek', foto: 'obrazky/pes.jpg'}
]



function zvirata(input) {
    let zvire = document.createElement('div');  
    zvire.className = 'zvire';
    
    let fotoZvirete = document.createElement('img');
    fotoZvirete.className = 'foto';
    fotoZvirete.src = input.foto;

    let jmenoZvirete = document.createElement('div');
    jmenoZvirete.className = 'jmeno';
    jmenoZvirete.innerHTML = input.jmeno;

    let farma = document.querySelector('.farma');
    farma.appendChild(zvire);

    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);    
}



function vsechnaZvirata(pole) {
    pole.forEach(zvirata);
}

vsechnaZvirata(poleZvirat);






