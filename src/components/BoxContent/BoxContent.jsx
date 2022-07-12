import React from 'react';

const BoxContent = ({ content }) => {
    return (
        <ul className='list-group list-group-flush'>
            <li className='list-group-item' style={{ textTransform: 'uppercase' }}>{content}</li>
        </ul>
    );
}

export default BoxContent;