import React from 'react';

const InfoCard = ({ img, cardtitle, bgClass, carddescription }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl  ${bgClass}`}>
            <figure className='pl-5'>
                <img className='pt-6' src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardtitle}</h2>
                <p>{carddescription}</p>

            </div>
        </div>
    );
};

export default InfoCard;