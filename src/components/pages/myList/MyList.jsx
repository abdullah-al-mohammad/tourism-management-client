import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';


const MyList = () => {
	const { user } = useContext(AuthContext)
	const [myList, setMyLists] = useState([])

	const url = `http://localhost:5000/addSpot?email=${user?.email}`
	useEffect(() => {
		axios.get(url, { withCredentials: true })
			.then(res => {
				setMyLists(res.data)
			})
		// fetch(url)
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		// console.log(data);
		// 		setMyLists(data)

		// 	})
	}, [])


	return (
		<div className="card-body container mx-auto">
			{myList.length > 0 ? (
				<>
					<h1 className="text-5xl text-center mb-4">My Added Spots</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{myList.map(spot => (
							<div key={spot._id} className="card border shadow-md p-4">
								<img src={spot.url} alt={spot.spot} className="rounded mb-2" />
								<h2 className="text-xl font-bold">{spot.spot}</h2>
								<p>{spot.description}</p>
								<p><strong>Location:</strong> {spot.location}</p>
								<p><strong>Cost:</strong> {spot.travelCost}</p>
								<Link
									to={`/viewDetails/${spot._id}`}
									className="btn btn-link text-blue-600 mt-2"
								>
									View Details
								</Link>
							</div>
						))}
					</div>
				</>
			) : (
				<>
					<h1 className="text-5xl text-center mb-4">You haven’t added any spots yet</h1>
					<div className="mx-auto">
						<Link className="btn btn-link border border-cyan-600" to="/addSpot">
							Add Spot
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default MyList;

