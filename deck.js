import Card from "./card.js";
const _ = require("lodash");

class Deck {
  constructor() {
    this.suits = ["CLUBS", "SPADES", "DIAMONDS", "HEARTS"];
    this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    this.cards = [];
    this.suits.forEach(suit => {
      this.values.forEach(value => {
        const card = new Card(suit, value);
        this.cards.push(card);
      });
    });
  }

  shuffle() {
    _.shuffle(this.cards);
  }

  deal() {
    return this.cards.pop();
  }
}
