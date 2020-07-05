import React from 'react';

const Error = ({mensaje}) => {
    return (
        <div className="error">
            <p >{mensaje}</p>
        </div>
    );
};

export default Error;