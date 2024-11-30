import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
	const userInfo = useLoaderData()
	console.log(userInfo);

	return (
		<div>
			<h1>User List:{userInfo.length} </h1>
			<div>
				{
					userInfo.map(user => {
						const { email, displayName, _id } = user
						return (
							<div>
								<h1>{_id}</h1>
								<h1>{email}</h1>
								<h1>{displayName}</h1>
							</div>
						)
					})
				}
			</div>
		</div>
	);
};

export default Users;