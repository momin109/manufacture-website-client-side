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
            <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                <h1 className='text-2xl font-bold '>{user.displayName || ''}</h1>
                <h2>{user.email || ''}</h2>
                <h3>{user.address}</h3>
            </form>
        </div>
    );
};

export default Portfolia;