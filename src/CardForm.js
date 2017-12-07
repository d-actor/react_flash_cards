import React from 'react';

class CardForm extends React.Component {
  state = { name: '', question: '', answer: '', nextId: 1 }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, question, answer, nextId } = this.state;
    const card = { name, question, answer, id: nextId }
    this.setState({ name: '', question: '', answer: '', nextId: nextId + 1 })
    this.props.addCard(card);
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value})
  }

  handleChangeQues = (e) => {
    this.setState({ question: e.target.value})
  }

  handleChangeAns = (e) => {
    this.setState({ answer: e.target.value})
  }

  render() {
    const { name } = this.state.name;
    const { question } = this.state.question;
    const { answer } = this.state.answer;

    return(
      <form>
        Name: <input value={name} onChange={this.handleChangeName} />
        <br />
        Question: <input value={question} onChange={this.handleChangeQues} />
        <br />
        Answer: <input value={answer} onChange={this.handleChangeAns} />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default CardForm;
