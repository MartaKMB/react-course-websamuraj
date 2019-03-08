import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    userName: '',
    email: '',
    pass: '',
    accept: false,
    message: '',

    errors: {
      userName: false,
      email: false,
      pass: false,
      accept: false,
    }
  }

  messages = {
    userNameIncorrect: 'Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji',
    emailIncorrect: 'Brak @ w emailu',
    passwordIncorrect: 'Hasło musi mieć 8 znaków',
    acceptIncorrect: 'Nie potwierdzona zgoda',
  }

  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;

    if(type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value
      })
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      })
    } 
  }

  handleSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();

    if(validation.correct) {
      this.setState({
        userName: '',
        email: '',
        pass: '',
        accept: false,
        message: 'Formularz został wysłany',
        errors: {
          userName: false,
          email: false,
          pass: false,
          accept: false,
        }
      })
    } else {
      this.setState({
        errors: {
          userName: !validation.userName,
          email: !validation.email,
          pass: !validation.pass,
          accept: !validation.accept,
        }
      })
    }
  }

  formValidation = () => {
    let userName = false;
    let email = false;
    let pass = false;
    let accept = false;
    let correct = false;

    if(this.state.userName.length > 10 && this.state.userName.indexOf(' ') === -1) {
      userName = true;
    }
    if(this.state.email.indexOf('@') !== -1) {
      email = true;
    }
    if(this.state.pass.length === 8) {
      pass = true;
    }
    if(this.state.accept) {
      accept = true;
    }
    if(userName && email && pass && accept) {
      correct = true;
    }

    return ({
      correct,
      userName,
      email,
      pass,
      accept,
    })
  }

  componentDidUpdate() {
    if(this.state.message !== '') {
      setTimeout(() => this.setState({message: ''}), 2000);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoje imię: 
            <input
              type="text"
              id="user"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            {this.state.errors.userName && <span>{this.messages.userNameIncorrect}</span>}
          </label>

          <label htmlFor="email">Twoje email: 
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors.email && <span>{this.messages.emailIncorrect}</span>}
          </label>

          <label htmlFor="password">Twoje hasło: 
            <input
              type="password"
              id="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
            {this.state.errors.pass && <span>{this.messages.passwordIncorrect}</span>}
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            /> 
            Wyrażam zgodę
          </label>
          {this.state.errors.accept && <span>{this.messages.acceptIncorrect}</span>}

          <button>Zapisz się</button>
        </form>
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default App;
