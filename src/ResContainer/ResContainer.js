import React from 'react';
import Res from '../Res/Res';
import './ResContainer.scss';

const ResContainer = ({ reservations, deleteReservation, sortReservations }) => {
    const resCards = reservations.map((res, i) => {
        return <Res key={i} {...res} deleteReservation={deleteReservation} />
    })

    return (
        <section className='reservation-container'>
            {resCards}
            <button className='sort-btn' onClick={() => sortReservations()}>Sort by Earliest/Latest</button>
        </section>
    )
}

export default ResContainer;