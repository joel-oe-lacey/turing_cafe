import React from 'react';
import Res from '../Res/Res';
import './ResContainer.scss';

const ResContainer = ({ reservations, deleteReservation }) => {
    const resCards = reservations.map((res, i) => {
        return <Res key={i} {...res} deleteReservation={deleteReservation} />
    })

    return (
        <section className='reservation-container'>
            {resCards}
        </section>
    )
}

export default ResContainer;