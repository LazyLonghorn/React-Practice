import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    render() {
        const { number } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <button onClick={()=>{
                    // this.setState((prevState, props) => {return });
                    
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        }
                    });

                    this.setState(prevState => ({
                        number: prevState.number + 1
                    })
                    , ()=>{
                        console.log('Working End')
                    })
                    
                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;