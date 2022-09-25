import React from 'react';
import PropTypes from "prop-types";

const MyFuncComponent = (props) => {
    const {name, children, code} = props;
    return (
        <div>
            MyFuncComponent {name}<br/>
            MyFuncComponent {children}<br/>
            MyFuncComponent {code}
        </div>
    );
};

MyFuncComponent.defaultProps = {
    name : 'Default Name'
}

MyFuncComponent.propTypes = {
    code : PropTypes.number.isRequired
}

export default MyFuncComponent;