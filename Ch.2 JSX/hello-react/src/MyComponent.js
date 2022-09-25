import React, { Component } from 'react';
import PropTypes from "prop-types";

class MyComponent extends Component {
    static defaultProps = {
        name : 'Default Name'
    }

    static propTypes = {
        code : PropTypes.number.isRequired
    }
    
    render() {
        const {name, children, code} = this.props;
        return (
            <div>
                MyComponent {name}<br/>
                MyComponent {children}<br/>
                MyComponent {code}
            </div>
        );
    }
}

// MyComponent.defaultProps = {
//     name : 'Default Name'
// }

// MyComponent.propTypes = {
//     code : PropTypes.number.isRequired
// }

export default MyComponent;