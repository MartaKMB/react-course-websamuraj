const Person = props => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={() => props.delete(props.name)}>Usuń</button>
    </li>
  )
}

class List extends React.Component {

  state = {
    people: [
      { id: 10, name: 'Jan K.' },
      { id: 20, name: 'Piotr C.' },
      { id: 30, name: 'Marysia W.' },
      { id: 40, name: 'John S.' },
    ]
  }

  handleDelete = name => {
    let people = this.state.people.slice();
    people = people.filter(person => name !== person.name);
    this.setState({
      people,
    });
  }

  render() {
    const people = this.state.people.map(person => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.handleDelete}
      />
      )
    )

    return (
      <ul>
        {people}
      </ul>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('root'))