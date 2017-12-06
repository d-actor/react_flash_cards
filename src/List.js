import React from 'react';
import Card from './Card';

class List extends React.Component {
  render() {
    let cards = this.props.cards.map ( card => {
      return (<Card key={card.id} {...card} toggleCard={this.props.toggleCard} />)
    });

    return(
      <div className="row">
        {cards}
      </div>
    )
  }
}

export default List;
