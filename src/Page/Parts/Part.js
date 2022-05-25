import React from 'react';

const Part = ({ part, setBuynow }) => {
    const { productName, price, minQty, availableQty, description, img } = part;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{productName}</h2>
                <p><small>{description}</small></p>
                <h3>Available: {availableQty}</h3>
                <h3>Minimum orders: {minQty}</h3>
                <h4>Price: ${price}</h4>

                <div className="card-actions">



                    <label onClick={() => setBuynow(part)} for="Buy-modal" class="btn btn-primary">PURCHASH</label>

                </div>
            </div>
        </div>
    );
};

export default Part;