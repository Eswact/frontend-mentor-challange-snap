function menu1ac(){
    let menu1 = document.getElementById("altmenu");
    let arrowdown = document.getElementById("men1k");
    let arrowup = document.getElementById("men1a");
    menu1.classList.toggle("ac");
    arrowdown.classList.toggle("acildi");
    arrowup.classList.toggle("acildi");
}

function menu2ac(){
    let menu2 = document.getElementById("altmenu2");
    let arrowdown = document.getElementById("men2k");
    let arrowup = document.getElementById("men2a");
    menu2.classList.toggle("ac");
    arrowdown.classList.toggle("acildi");
    arrowup.classList.toggle("acildi");
}

function yanmenuac(){
    let menac = document.getElementById('ic-menu');
    let menkapa = document.getElementById('ic-close-menu');
    let siyah = document.getElementById('kara');
    let nav = document.getElementById('yanav');
    menac.classList.toggle('acil');
    menkapa.classList.toggle('acil');
    siyah.classList.toggle('karart');
    nav.classList.toggle('ac');
}