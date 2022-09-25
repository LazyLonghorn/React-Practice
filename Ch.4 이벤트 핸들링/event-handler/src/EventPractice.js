import React, { Component } from 'react';

class EventPractice extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            message: ''
        }
    }

    handleChange = (e) => {
       this.setState({
            [e.target.name] : [e.target.value]
       });
    }

    handleClick = (e) => {
        alert(this.state.username + " : " + this.state.message)
        this.setState({
            username: '',
            message: ''
        });
    }
    

    render() {
        return (
            <div>
                <input 
                    type="text"
                    name="username"
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder='message'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Alert</button>
            </div>
        );
    }
}

export default EventPractice;