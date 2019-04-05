import React from 'react';
import {Prompt} from 'react-router-dom';

import '../styles/Contact.css';

class ContactPage extends React.Component {
    state = {
        value: ""
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSumit = (e) => {
        e.preventDefault();
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSumit}>
                    <h3>napisz do nas</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="wpisz wiadomość..."></textarea>
                    <button>wyślij</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message="Masz wypełniony formularz. Czy na pewno chcesz opuściś stronę?"
                />
            </div>
        );
    }
}

export default ContactPage;