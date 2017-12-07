import React from 'react';

const Card = ({ name, question, answer, id, toggleCard }) => (
  <div className="container">
    {name}
    <br />
    {question} ?
    <br />
    Answer: <span
              className="answerReveal"

            >{answer}
            </span>
    <br />
    <button
    >
      Reveal Answer
    </button>
  </div>
)

export default Card;
