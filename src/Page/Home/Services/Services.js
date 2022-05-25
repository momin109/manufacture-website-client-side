import React from 'react';
import firstimg from '../../../assets/image/first.jpg';
import secondimg from '../../../assets/image/second.jpg';
import thirdimg from '../../../assets/image/third.jpg';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: '',
            description: '',
            img: firstimg
        },
        {
            _id: 2,
            name: '',
            description: '',
            img: secondimg
        },
        {
            _id: 3,
            name: '',
            description: '',
            img: thirdimg
        }
    ]
    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold'>Our Service</h3>

            </div>
            <div className='grid sm:grid-cols-1  md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;