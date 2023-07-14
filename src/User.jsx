import React, { useState } from 'react';
import data from './data.json';

const User = ({ items }) => {
    const [sortedData, setSortedData] = useState(data);
    const [sortOrder, setSortOrder] = useState('ascending');

    const handleSort = () => {
        const sorted = [...sortedData].sort((a, b) =>
            a.name.localeCompare(b.name)
        );

        if (sortOrder === 'descending') {
            sorted.reverse();
            setSortOrder('ascending');
        } else {
            setSortOrder('descending');
        }

        setSortedData(sorted);
    };

    return (
        <div className='Lokshi'>
            <div className='container'>

                <button onClick={handleSort} className="btn btn-primary" >Sort {sortOrder === 'ascending' ? 'Descending' : 'Ascending'}</button>

                {sortedData.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.Email}</p>
                        <p>{item.Phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;
