import React from 'react';
import Res from '../Res/Res';
import './ResContainer.scss';

const ResContainer = ({ reservations }) => {
    const resCards = reservations.map(res => {
        return <Res {...res} />
    })

    return (
        <section className='reservation-container'>
            {resCards}
        </section>
    )
}

export default ResContainer;