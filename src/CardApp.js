import React from 'react';
import List from './List';
import CardForm from './CardForm';

class CardApp extends React.Component {
  state = { cards: [], filter: 'All' }

  addCard = (card) => {
    this.setState({ cards: [card, ...this.state.cards] });
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  filteredCards = () => {
    const { filter, cards } = this.state;
    switch(filter) {
      case 'All':
        return cards;
      default:
        return cards;
    }
  }

  render() {
    return(
      <div>
        <CardForm addCard={this.addCard} />
        <List cards={this.filteredCards()} />
      </div>
    )
  }
}

export default CardApp;

// ** to do ** \\
// delete card
// edit card

// click card in app to view answer
