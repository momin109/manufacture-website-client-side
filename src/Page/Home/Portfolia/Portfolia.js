import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

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

            <div class=" max-w-7xl bg-base-100 shadow-xl lg:mx-32">
                <div class="card-body">
                    <h2 class=" text-2xl font-bold text-amber-400'">Welcome to Your Profolia website</h2>
                    <h1 className='text-3xl font-bold text-amber-400'>Name: {user.displayName || ''}</h1>
                    <h2 className='text-amber-700 text-4xl'>Email Address: {user.email || ''}</h2>
                    <h3 className='text-2xl'>Address: house/holding: 56/2, South Charmohanpur Jame  Mosque , Tikrampur ,
                        Chapai Nawabganj sadar ,
                        chapai nawabganj</h3>
                    <h1 className='text-2xl mb-20'>Phone No. 017977XXXXXX</h1>
                    <h2>My Live website Link</h2>
                    <a href="https://warehouse-management-cli-dcfa7.web.app">First website live link</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolia;