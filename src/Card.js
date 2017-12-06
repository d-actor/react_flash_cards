import React from 'react';

const Card = ({ name, answer, id, toggleCard }) => (
  <div className="container">
    {name}

    {answer}
  </div>
)

export default Card;
