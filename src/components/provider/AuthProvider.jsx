import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react';
import { createContext, useState, useEffect } from 'react'
import auth from '../../../firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)


	// create user profile
	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)

	}
	// login user profile
	const signInUser = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	// logOut user
	const signOutUser = () => {
		setLoading(true)
		return signOut(auth)
	}

	useEffect(() => {
		const unsubsCribe = onAuthStateChanged(auth, currentUser => {
			const userEmail = currentUser?.email || user?.email
			const loggedUser = { email: userEmail }
			setUser(currentUser)

			setLoading(false)

			if (currentUser) {
				axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
					.then(res => {
						console.log('token response', res.data);
					})
			} else {
				axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
					.then(res => {
						console.log(res.data);

					})
			}

		})
		// Cleanup subscription on unmount
		return () => {
			unsubsCribe()
		}
	}, [])


	// user Information send to AuthProvider
	const userInfo = {
		user,
		createUser,
		signInUser,
		signOutUser

	}
	return (
		<AuthContext.Provider value={userInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;