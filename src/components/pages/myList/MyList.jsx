// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react'


// const MyList = () => {
// 	const [myList, myLists] = useState()
// 	useEffect(() => {
// 		fetch(`http://localhost:5000/addSpot`)
// 			.then(res => res.json())
// 			.then(data => {
// 				console.log(data);

// 			})
// 	}, [])


// 	return (
// 		<div className='card-body'>
// 			<h1 className='text-5xl text-center mb-4'>You don’t add any spots yet</h1>
// 			<div className='mx-auto'>
// 				<Link className='btn btn-link border border-cyan-600' to='/addSpot'>Add Spot</Link>
// 			</div>
// 		</div>
// 	);
// };

// export default MyList;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../provider/AuthProvider';

const MyList = () => {
	const [myList, setMyList] = useState([]);
	const user = useContext(AuthContext)
	console.log(user);

	const userId = user._id; // Replace with dynamic user ID (e.g., from context or auth)
	console.log(userId);


	useEffect(() => {
		fetch(`http://localhost:5000/addSpot?creator=${user._id}`)
			.then(res => res.json())
			.then(data => {
				// Filter the data based on the logged-in user's creator ID
				const userSpecificData = data.filter(item => item.creator === userId);
				console.log(userSpecificData);

				setMyList(userSpecificData);
			})
			.catch(error => console.error("Error fetching data:", error));
	}, [userId]);

	return (
		<div className="card-body">
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
								<p><strong>Cost:</strong> {spot.cost}</p>
								<Link
									to={`/spotDetails/${spot._id}`}
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
