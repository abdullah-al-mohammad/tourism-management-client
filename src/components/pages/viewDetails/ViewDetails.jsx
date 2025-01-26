import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react'

const ViewDetails = () => {
    const allData = useLoaderData()
    const [data, setData] = useState(allData)
    console.log(data);

    useEffect(() => {
        setData(allData)
    }, [allData])

    if (!data) {
        return <div>Loading......</div>
    }
    const { url, spot, country, location, spotDetails, travelCost, season } = data


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
                <span>Cost: {travelCost}</span>
                <span>Season: {season}</span>
                <p>Details: {spotDetails}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;