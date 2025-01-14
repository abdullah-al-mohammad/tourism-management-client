import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react';
import { createContext, useState, useEffect } from 'react'
import auth from '../../../firebase.config';

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
			setUser(currentUser)
			if (currentUser) {
				// console.log(currentUser);
				setLoading(false)

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