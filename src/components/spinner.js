import React from 'react';
import './spinner.css';

const Spinner = props => (
    <div className="sk-chase">
        <div className="sk-chase-dot"/>
        <div className="sk-chase-dot"/>
        <div className="sk-chase-dot"/>
        <div className="sk-chase-dot"/>
        <div className="sk-chase-dot"/>
        <div className="sk-chase-dot"/>
    </div>
);

export default Spinner;