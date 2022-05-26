import React, { useEffect, useState } from 'react';
import BuyModel from './BuyModel';
import Part from './Part';

const Parts = () => {
    const [services, setServices] = useState([]);
    const [buynow, setBuynow] = useState(null);

    useEffect(() => {
        fetch('https://salty-oasis-13146.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto mt-12'>
            <h4 className='text-xl text-primary text-center '> </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    services.map(part => <Part
                        key={part._id}
                        part={part}
                        setBuynow={setBuynow}
                    ></Part>)
                }

            </div>
            {buynow && <BuyModel buynow={buynow}
                setBuynow={setBuynow}
            ></BuyModel>}
        </div>
    );
};

export default Parts;