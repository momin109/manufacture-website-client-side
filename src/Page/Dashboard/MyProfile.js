import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
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
                    <h2 className=" text-2xl font-bold text-amber-400'">Welcome to Your profile account</h2>
                    <h1 className='text-3xl font-bold text-amber-400'>Name: {user.displayName || ''}</h1>
                    <h2 className='text-amber-700 text-4xl'>Email Address: {user.email || ''}</h2>

                </div>
            </div>

        </div>
    );
};

export default MyProfile;