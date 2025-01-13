import React from 'react';
import { useState, useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';

const AddSpot = () => {
	const { user, loading } = useContext(AuthContext)
	// console.log(user);

	const [creatorId, setCreatorId] = useState()
	console.log(creatorId);


	useEffect(() => {

		fetch(`http://localhost:5000/user?e=${user?.email}`, {
			method: "GET",
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(data => {
				setCreatorId(data)

			})
	}, [user?.email])


	const handleSubmit = (e) => {
		// const [success, setSuccess] = useState()
		e.preventDefault();
		const form = new FormData(e.currentTarget)
		const url = form.get('url')
		const spot = form.get('spot')
		const country = form.get('country')
		const location = form.get('location')
		const description = form.get('description')
		const cost = form.get('cost')
		const season = form.get('season')
		const time = form.get('time')
		const visitor = form.get('visitor')
		const creator = creatorId._id
		const email = user?.email
		const name = user?.displayName
		const touristSpotData = {
			url,
			spot,
			country,
			location,
			spotDetails: description,
			travelCost: cost,
			season,
			time,
			visitor,
			creator,
			email: email,
			userName: name
		}
		console.log("Form Data:", touristSpotData);

		// clean the box
		// setSuccess('')

		// Add form submission logic here, like saving to Firebase or Google Sheets
		fetch('http://localhost:5000/addSpot', {
			method: "POST",
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(touristSpotData)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				Swal.fire("Information save successfully✔");
				e.target.reset()

			})
	};


	if (loading) {
		return (
			<span className="loading loading-bars loading-xs"></span>
		)
	}

	return (
		<div className="container mx-auto">
			<div className="bg-base-200">
				<div className="text-center">
					<h1 className="text-5xl font-bold">Find Your Next Stay</h1>
					<p className="py-6">
						Add Your Favorite Tourist Spot.
					</p>
				</div>
				<div className="card bg-base-100 shrink-0 shadow-2xl">
					<form onSubmit={handleSubmit} className="card-body">
						<div className='grid grid-cols-1 lg:grid-cols-2  gap-x-3 w-full'>
							<div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Add Image</span>
									</label>
									<input type="url" placeholder="image URL" name='url' className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Spot Name</span>
									</label>
									<input type="text" placeholder="Tourist Spot Name" name='spot' className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Country Name</span>
									</label>
									<input type="text" placeholder="Country Name" name='country' className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Location</span>
									</label>
									<input type="text" placeholder="Location" name='location' className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Short Description</span>
									</label>

									<textarea name='description' className='border rounded' required></textarea>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Average Cost</span>
									</label>
									<input type="number" placeholder="Cost" name='cost' className="input input-bordered" required />
								</div>
							</div>
							<div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Seasonality</span>
									</label>
									<input type="text" placeholder="e.g., Summer, Winter" name='season' className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Travel Time</span>
									</label>
									<input type="date" name='time' className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Total Visitor Per Year</span>
									</label>
									<input type="text" placeholder="Total Visitor" name='visitor' className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input type="email" placeholder="Your Email" name='email' defaultValue={user?.email} className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Name</span>
									</label>
									<input type="text" placeholder="Your name" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
								</div>
							</div>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Add Tourist Spot</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddSpot;