import React from 'react'
import './Sidebaroptions.css'
import PropTypes from 'prop-types';

function Sidebaroptions ({ active, text, Icon }) {
    return (
    <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
    );
}

Sidebaroptions.propTypes = {
    active: PropTypes.bool,
    text: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired
}

export default Sidebaroptions
