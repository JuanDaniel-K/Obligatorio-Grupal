const { createElement } = require("react");

let espectaculos = [
    { imagen: "/images/conciertoDaddyYankee.png", codigo: 1, tipo: "Concierto de Daddy Yankee", precio: 1100},
    { imagen: "/images/conciertoQueen.png", codigo: 2, tipo: "Concierto de Queen", precio: 1500},
    { imagen: "/images/conciertoLosBeatles.png", codigo: 3, tipo: "Concierto de Los Beatles", precio: 2500},
    { imagen: "/images/conciertoEdSheeran.png", codigo: 4, tipo: "Concierto de Ed Sheeran", precio: 1000},
    { imagen: "/images/conciertoDuki.png", codigo: 5, tipo: "Concierto de Duki", precio: 1200},
    { imagen: "/images/conciertoArianaGrande.png", codigo: 6, tipo: "Concierto de Ariana Grande", precio: 1000},
    { imagen: "/images/conciertoJustinBieber.png", codigo: 7, tipo: "Concierto de Justin Bieber", precio: 1700},
    { imagen: "/images/conciertoMichaelJackson.png", codigo: 8, tipo: "Concierto de Michael Jackson", precio: 1000},
    { imagen: "/images/conciertoSwift.png", codigo: 9, tipo: "Concierto de Taylor Swift", precio: 2000},
    { imagen: "/images/barbiePelicula.png", codigo: 10, tipo: "Barbie la Pelicula", precio: 100},
    { imagen: "/images/clasicoNacional.png", codigo: 11, tipo: "Clasico Uruguayo", precio: 250},
    { imagen: "/images/finalChampions.png", codigo: 12, tipo: "Final de la Champions", precio: 2500},
    { imagen: "/images/finalMundial.png", codigo: 13, tipo: "Final del Mundial", precio: 9500},
    { imagen: "/images/finalNba.png", codigo: 14, tipo: "Finales de la NBA", precio: 3500},
    { imagen: "/images/losVengadores.png", codigo: 15, tipo: "Los Vengadores Endgame", precio: 500},
    { imagen: "/images/minecraftPelicula.png", codigo: 16, tipo: "Minecraft la Pelicula", precio: 200}
];

let botonComprar = document.getElementById('comprarTicket');


let personas = [
    { id: 1, nombre: "Juan", espectaculos:[] },
    { id: 2, nombre: "Julian", espectaculos:[] },
    { id: 3, nombre: "Carlos", espectaculos:[] },
];

let conteiner = document.querySelector(".conteiner");
let compras = document.querySelector(".carrito");
let dropdown = document.getElementById("lista-personas");
