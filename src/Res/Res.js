import React from 'react';
import './Res.scss';

const Res = ({id, name, date, time, number}) => {
    return (
        <section key={id} className='reservation'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{`${time} PM`}</p>
            <p>{`Number of Guests: ${number}`}</p>
            <button>Cancel</button>
        </section>
    )
}

export default Res;