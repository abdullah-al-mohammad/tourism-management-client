import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../../../firebase.config';

const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleSignIn = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        // create user auth
        signInUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user);

            })
            .catch((error) => {
                const errorCode = error.code
                console.log(errorCode);


            })

    }

    // google signUp
    const handleGoogleSignUp = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            console.log(user);
            
        })
        .catch(error => {
            console.error(error);
            
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        "Visit the world's longest natural sea beach in <span className='text-pretty text-emerald-700 underline'>Cox's Bazar</span>, where golden sands meet the turquoise waters of the Bay of Bengal. A haven for beach lovers and sunset chasers."
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <p>Don't have an account please?<Link to='/register'><button className="btn-link font-bold">Register</button></Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="flex mt-6">
                            <button onClick={handleGoogleSignUp} className="btn"><FaGoogle></FaGoogle></button>
                            <button className="btn ml-2"><FaFacebook></FaFacebook></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;