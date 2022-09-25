import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });

        this.input.focus();
    }

    render() {
        return (
            <div>
                <input 
                    ref={(ref) => this.input = ref}
                    type="password"
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Validation</button>
            </div>
        );
    }
}

export default ValidationSample;