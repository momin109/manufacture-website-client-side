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
                <input type="text" name='name' class="input input-bordered w-full max-w-xs" disabled value={user?.displayName || ''} />
                <input type="text" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                <input type="text" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Portfolia;