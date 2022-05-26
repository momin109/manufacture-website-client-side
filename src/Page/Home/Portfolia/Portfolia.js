import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import firstImg from '../../../assets/screenshort/Screenshot_8.png'
import secondImg from '../../../assets/screenshort/Screenshot_8.png'
import thirdImg from '../../../assets/screenshort/Screenshot_8.png'
import Port from './Port';

const Portfolia = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleBuyNow = event => {
        event.preventDefault();
        const patient = user.email;
        const patientName = user.displayName;
        const address = event.target.address.value;
        const email = event.target.email.value;
        console.log(patient, patientName, address, email)

    }
    return (
        <div>

            <div className=" max-w-7xl bg-base-100 shadow-xl lg:mx-32">
                <div className="card-body">
                    <h2 className=" text-2xl font-bold text-amber-400'">Welcome to my Profolia website</h2>
                    <h1 className='text-3xl font-bold text-amber-400'>Name: Abdul Momin</h1>
                    <h2 className='text-amber-700 text-2xl'>Email Address: momin550550@gmail.com</h2>

                    <h3 className='text-2xl'>National University Honours 3rd </h3>
                    <h1 className='text-2xl mb-20'>Phone No. 017977XXXXXX</h1>
                    <a className='text-2xl font-bold' href="https://warehouse-management-cli-dcfa7.web.app/">Live link No 1</a>
                    <a className='text-2xl font-bold' href="https://starlit-douhua-3c9515.netlify.app/">Live link No 2</a>
                    <a className='text-2xl font-bold' href="https://genius-car-services-ff0c4.web.app/?fbclid=IwAR3YkPo8BWDs_IrkmvzekrIX9J2iEF2mtdurWIKGxytd-0poakWx01nFBIc">Live link No 3</a>

                </div>
            </div>



        </div>
    );
};

export default Portfolia;