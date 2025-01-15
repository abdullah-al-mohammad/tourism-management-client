import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
	const { user } = useContext(AuthContext)
	const location = useLocation()
	console.log(location);

	if (user) {
		return children
	}
	return <Navigate state={location?.pathname} to='/login' replace></Navigate>
};

export default PrivateRouter;