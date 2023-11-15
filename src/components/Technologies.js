import React from 'react';

function TechnologiesList({ technologies }) {
    return (
        <div className='technology-list'>
            {technologies.map((item, index) => (
                <p className='technology' key={index}>{item}</p>
            ))}
        </div>
    );
}

export default TechnologiesList;
