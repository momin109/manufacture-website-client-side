import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const HansTools = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-xl text-primary text-center my-12'>Hand Tools </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    services.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }

            </div>
        </div>
    );
};

export default HansTools;