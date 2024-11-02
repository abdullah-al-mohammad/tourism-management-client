import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import {createContext, useState, useEffect} from 'react'
import auth from '../../../firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    // create user profile
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
        
    }
    // login user profile
    const signInUser = ( email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const unsubsCribe =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
            if(currentUser){
                console.log(currentUser);
                
            }
        })
        // Cleanup subscription on unmount
        return() =>{
            unsubsCribe()
        }
    }, [])
    

// user Information send to AuthProvider
    const userInfo ={
        user,
        createUser,
        signInUser

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;