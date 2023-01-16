/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamints (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 *
 * Black Jack 
 * 21=> alcanzar 21 puntos sin pasarnos, de lo contrario se pierde
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Esta función crea un nurvo deck
const createDeck = () => {
    for(let i = 2; i<=10; i++){
        for(let tipo of tipos){
            deck.push(i+tipo);
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp+tipo);
        }
    }
    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

createDeck();

// Esta funcion me permite tomar una carta

const pedirCarta = () => {

    if(deck.length === 0){
        throw 'No hay cartas en el Deck';
    }

    const carta = deck.pop();
    console.log(deck);
    console.log(carta);//la carta debe ser de la baraja
    return carta;
}

pedirCarta();