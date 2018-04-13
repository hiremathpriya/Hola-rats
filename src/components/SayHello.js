
import React, { Component } from 'react';

class SayHello extends Component {
    constructor() {
        super();
        this.state = {
            message: "from Priya!",

        };
        this.updateMessage = this.updateMessage.bind(this)
    }
    updateMessage() {

        console.log(this.state);

        let messages = ["Kia-Ora lovely Rat's!", "Namaste", "BONJOUR",
            "HOLA", "Happy-Birthday Harrison",
            "HALO", "TAG", "CIAO", "OLA", "SALAM", "AHN-YOUNG-HA-SE-YO"];

        let randomNumber = Math.floor(Math.random() * messages.length);

        this.setState({
            message: messages[randomNumber]

        })
    }

    render() {
        return (
            <div className="sayhello">
                <h1>{this.state.message}</h1>
                <button onClick={this.updateMessage}>Click me!</button>



            </div>
        );
    }
}
export default SayHello;
