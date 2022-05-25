import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import delivery from '../../../assets/icon/1.webp';
import support from '../../../assets/icon/2.webp';
import money from '../../../assets/icon/3.webp';
import discount from '../../../assets/icon/4.webp';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-12'>
            <InfoCard cardtitle="FREE DELIVERY" carddescription="Free shipping on all order" bgClass="bg-gradient-to-r from-secondary to-primary" img={delivery} ></InfoCard>

            <InfoCard cardtitle="ONLINE SUPPORT 24/7" carddescription="Support online 24 hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={support} ></InfoCard>
            <InfoCard cardtitle="MONEY RETURN" carddescription="Back guarantee under 7 days" bgClass="bg-gradient-to-r from-secondary to-primary" img={money} ></InfoCard>
            <InfoCard cardtitle="MEMBER DISCOUNT" carddescription="Onevery order over $30.00" bgClass="bg-gradient-to-r from-secondary to-primary" img={discount} ></InfoCard>
        </div>
    );
};

export default Info;