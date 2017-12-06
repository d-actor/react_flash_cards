import React from 'react';
import List from './List';
import CardForm from './CardForm';

class CardApp extends React.Component {
  state = { cards: [], filter: 'All' }

  addCard = (card) => {
    this.setState({ cards: [...this.state.cards, card] });
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  filteredCards = () => {
    const { filter, cards } = this.state;
    switch(filter) {
      case 'All':
        return cards;
      case 'Active':
        return cards.filter( c => !c.complete );
      case 'Completed':
        return cards.filter( c => c.complete);
      default:
        return cards;
    }
  }

  toggleCard = (id) => {
    let card = this.state.cards.map( item => {
      if (card.id === id) {
        return {
          ...card,
          complete: !card.complete
        }
      }
      return card;
    });
    this.setState({ card });
  }

  render() {
    return(
      <div>
        <CardForm addCard={this.addCard} />
        <List toggleCard={this.toggleCard} cards={this.filteredCards()} />
      </div>
    )
  }
}

export default CardApp;

// ** to do ** \\
// add an answer to cards
// delete card
// edit card
// flip card in app to view answer
