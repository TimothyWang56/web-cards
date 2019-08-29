class Player {
  constructor(id) {
    this.id = id;
    this.hand = [];
  }

  addCard(card) {
    this.hand.push(card);
  }

  playCard(index) {
    const card = this.hand[index];
    if (this.hand.length > 0) {
      this.hand.splice(index, 1);
    }
    return card;
  }
}
