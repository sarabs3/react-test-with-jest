import React from 'react';
import PropTypes from 'prop-types';

const Toggle = (props) => (props.status 
    ? <h1 onClick={()=>props.handle()}>Toggle On</h1>
    : <h1 onClick={()=>props.handle()}>Toggle Off</h1>);

Toggle.prototype = {
    toggle: PropTypes.bool
}

export default Toggle;