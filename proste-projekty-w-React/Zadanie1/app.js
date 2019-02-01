class Omen extends React.Component {

  state = {
    options: ["1", "2", "3"],
    option: null,
    userOption: '',
  }

  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index]
    })
  }

  handleChange = e => {
    this.setState({
      userOption: e.target.value,
    })
  }

  addOption = () => {
    if (this.state.userOption === "") return alert('aby coś dodać, musisz coś wpisać!');
    const options = [...this.state.options, this.state.userOption];
    this.setState({
      options,
      userOption: '',
    });
    alert(`Wróżba dodana. Aktualne wróżby: ${options}`)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShowOption}>Zobacz wróżbę</button>
        <br />
        <input type="text" value={this.state.userOption} onChange={this.handleChange}/>
        <button onClick={this.addOption}>Dodaj wróżbę</button>
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    )
  }
}

ReactDOM.render(<Omen />, document.getElementById('root'))