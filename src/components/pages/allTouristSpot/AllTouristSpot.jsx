import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const AllTouristSpot = () => {
	const allSpots = useLoaderData()
	console.log(allSpots);
	// const { url, spot, cost, season, time, visitor, _id } = allSpots

	const navigate = useNavigate()
	const handleViewDetails = (id) => {
		navigate(`/viewDetails/${id}`)
	}
	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
				{
					allSpots.map(allSpot => {
						const { url, spot, travelCost, season, time, visitor, _id } = allSpot
						return (
							<div className="card card-compact bg-base-100 shadow-xl">
								<figure>
									<img
										src={url}
										alt="" />
								</figure>
								<div className="card-body">
									<h2 className="card-title">Tourists_spot_name{spot}</h2>
									<p><span className='font-semibold text-cyan-700'>average_cost:</span> {travelCost}</p>
									<p><span className='font-semibold text-cyan-700'>totalVisitors:</span> {visitor}</p>
									<p><span className='font-semibold text-cyan-700'>travel_time: </span>{time}</p>
									<p><span className='font-semibold text-cyan-700'>seasonality:</span> {season}</p>
									<div className="card-actions justify-end">
										<button onClick={() => handleViewDetails(_id)} className="btn btn-info">View Details</button>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	);
};

export default AllTouristSpot;