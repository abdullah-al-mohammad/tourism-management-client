import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data);
    
   const {url, spot, country, location, description, cost, season, time, visitor, email, password} = data
    
    
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={url}
                    alt="" />
            </figure>
            <div className="card-body text-center">
                <h2 className='font-bold'>place: {spot}</h2>
                <span>Location: {location}</span>
                <span>Country: {country}</span>
                <span>Cost: {cost}</span>
                <span>Season: {season}</span>
                <p>Details: {description}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;