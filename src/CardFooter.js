import React from 'react';

const answerReveal = (answer) => {
  return(
    <span
      style={{display: 'block', cursor: 'pointer'}}
    >{answer}
    </span>
  )
}

const filterLink = (text, current) => {
  if (text === current)
    return <span>{text}</span>
  return(
    <span
      onClick={() => (text)}
      style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer'}}
    >
      {text}
    </span>
  )
}

const CardFooter = ({ activeFilter, changeFilter }) => (
  <div>
    { filterLink('Reveal Answer', answerReveal, changeFilter) }
  </div>
)

export default CardFooter;
