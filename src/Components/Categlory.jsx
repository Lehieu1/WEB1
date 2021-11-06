import React from 'react';
import '../App.css';
function Categlory(props) {
    const { Change } = props;
    return (
        <div className="btn-menu">
            <button className="all" onClick={() => Change('all')}>All</button>
            <button className="breakfast" onClick={() => Change('breakfast')}>Breakfast</button>
            <button className="lunch" onClick={() => Change('lunch')}>Lunch</button>
            <button className="shakes" onClick={() => Change('shakes')}>Shakes</button>
        </div>
    );
}

export default Categlory;