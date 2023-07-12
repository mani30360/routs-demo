import React from 'react';
import data from './data.json';
const user = () => {
    return (
        <div className='container'>
            {data.map((item) => (
                <div key={item.id} >
                    <h2>{item.name}</h2>
                    <p>{item.Email}</p>
                    <p>{item.Phone}</p>
                </div>
            ))}
        </div>
    );
};

export default user;