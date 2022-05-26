import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BuyModel = ({ part, buynow, setBuynow }) => {
    const { _id, productName, price, qty } = buynow;
    const [user, loading, error] = useAuthState(auth);


    const handleBuyNow = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const productName = event.target.productName.value;
        const quantity = event.target.quantity.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const email = event.target.email.value;
        console.log(name, productName, quantity, phone, address, email)

        const placeOrder = {
            buynowId: _id,
            buynow: name,
            productName: event.target.productName.value,
            quantity: event.target.quantity.value,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        }

        fetch('http://localhost:5000/placeOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(placeOrder)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (buynow.success) {
                    toast(`Your order successfull`)
                }
                else {
                    toast(`Your order successfull`)
                }
                setBuynow(null);
            })


    }
    return (
        <div>
            <input type="checkbox" id="Buy-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="Buy-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{productName}</h3>

                    <form onSubmit={handleBuyNow} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name='name' className="input input-bordered w-full max-w-xs" disabled value={user?.displayName || ''} />
                        <input type="text" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled value={productName} name='productName' className="input input-bordered w-full max-w-xs" />
                        <input placeholder='quantity' name='quantity' className="select p select-bordered w-full max-w-xs" />


                        <input type="text" name='phone' placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Your Address" class="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Oder pleace" class="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BuyModel;