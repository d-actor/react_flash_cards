import React from 'react';

class CardForm extends React.Component {
  state = { name: '', answer: '', nextId: 1 }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, answer, nextId } = this.state;
    const card = { name, answer, id: nextId }
    this.setState({ name: '', answer: '', nextId: nextId + 1 })
    this.props.addCard(card);
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value})
  }

  handleChangeAns = (e) => {
    this.setState({ answer: e.target.value})
  }

  render() {
    const { name } = this.state;
    const { answer } = this.state;

    return(
      <form onSubmit={this.handleSubmit}>
        <input value={name} onChange={this.handleChangeName} />
        <input value={answer} onChange={this.handleChangeAns} />
      </form>
    )
  }
}

export default CardForm;
