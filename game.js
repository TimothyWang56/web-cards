import Deck from "./deck.js";
import Player from "./player.js";
let Game = class {
  constructor(listOfIDs) {
    this.players = [];
    listOfIDs.forEach(element => {
      this.players.push(new Player(element));
    });
		this.deck = new Deck();
		this.discardPile = [];
  }

	// this method takes in the id number of the player you want to deal to
	// and the number of cards (num) you want to deal to them, and it will
	// deal the desired number of cards to that player
  deal(id, num) {
		this.players.forEach(player => {
			if (player.id === id) {
				for (let i = 0; i < num; i++) {
					player.addCard(this.deck.deal());
				}
				break;
			}
		})
  }

	// this method takes in the id number of the first player to be dealt
	// and the number of cards (num) that you want to deal to every player,
	// and it will deal the desired number of cards to every player, starting
	// with that player
  dealAll(id, num) {
    if (num > 0) {
			let index = -1;
			// the first for loop gets the index of the player to be dealt first
      for (let i = 0; i < this.players.length; i++) {
        if (this.players[i].id === id) {
          index = i;
        }
			}
			// this second for loop deals 1 card to the first player, and every
			// player after them in the list
      for (let i = index; i < this.players.length; i++) {
        this.players[i].addCard(this.deck.deal());
			}
			// this third for loop deals num - 1 cards to every player
      for (let i = 0; i < num; i++) {
        this.players.forEach(player => {
          player.addCard(this.deck.deal());
        });
			}
			// this last for loop deals 1 card to every player from the beginning
			// of the player list up to the person before the first person dealt
      for (let i = 0; i < index; i++) {
        this.players[i].addCard(this.deck.deal());
			}
			// So, now all of the players should have been dealt the correct 
			// number of cards
    }
	}
	
	// this method will take in the id of the player and the index of the card
	// that they want to put into the discard pile, and it will remove the card
	// from that players hand and put it into the discard pile
	playAndDiscard(id, index) {
		this.players.forEach(player => {
			if (player.id === id) {
				card = player.playCard(index);
				this.discardPile.push(card);
				break;
			}
		})
	}

	// returns the top card of the discard pile
	showTopDiscard() {
		return this.discardPile[this.discardPile.length - 1];
	}

	// returns the entire discard pile
	showDiscardPile() {
		return this.discardPile;
	}
};
