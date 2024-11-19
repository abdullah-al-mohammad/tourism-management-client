import React from 'react';
import { Link } from 'react-router-dom';


const MyList = () => {

    return (
        <div className='card-body'>
            <h1 className='text-5xl text-center mb-4'>You don’t add any spots yet</h1>
            <div className='mx-auto'>
                <Link className='btn btn-link border border-cyan-600' to='/addSpot'>Add Spot</Link>
            </div>
        </div>
    );
};

export default MyList;