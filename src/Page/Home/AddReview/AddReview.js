import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const AddReview = () => {

    return (
        <div>
            <div className='text-center mt-20 text-4xl font-bold'><p>Review here</p></div>
            <div className='grid sm:grid-cols-1  md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 mt-16'>

                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Name: Abdul Momin</h2>
                        <p><span>Rating: 5</span></p>
                        <p> juntrick Product Review Article niye ki r video hobe?</p>

                    </div>
                </div>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Name: Abdul Wadud</h2>
                        <p><span>Rating: 5</span></p>
                        <p>This is best product .</p>

                    </div>
                </div>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Name: Faruk Ahmed</h2>
                        <p><span>Rating: 5</span></p>
                        <p>Is This Paid ? Assalamu alaikum bhaijan should i really Buy This ??</p>

                    </div>
                </div>

            </div>
        </div>

    );
};


export default AddReview;