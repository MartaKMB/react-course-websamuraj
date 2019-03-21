import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

const Home = () => <h1>Strona startowa</h1>;
const News = () => <h1>Strona aktualności</h1>;
const Contact = () => <h1>Strona kontaktowa</h1>;

const ErrorPage = () => <h1>Strona nie istnieje!</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li><NavLink to="/" exact activeClassName="home-selected">start</NavLink></li>
                <li><NavLink to="/news" activeClassName="news-selected">aktualności</NavLink></li>
                <li><NavLink to="/contact" activeClassName="contact-selected">kontakt</NavLink></li>
              </ul>
            </nav>
          </header>
        <section>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </section>
        </div>
      </Router>
    );
  }
}

export default App;
