import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="Card">
            <span>@{props.username}</span>
            <p>Donec condimentum malesuada nisi, in eleifend lacus luctus sed. Nullam condimentum cursus quam.</p>
            <p>Sed malesuada tincidunt dolor eget ornare.</p>
        </div>
    );
}

export default userOutput;