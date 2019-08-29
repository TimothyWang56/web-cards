class Player {
  constructor(id) {
    this.id = id;
    this.hand = [];
  }

  addCard(card) {
    this.hand.push(card);
  }

  playCard(num) {
    if (this.hand.length > 0) {
      this.hand.splice(num, 1);
    }
  }
}
