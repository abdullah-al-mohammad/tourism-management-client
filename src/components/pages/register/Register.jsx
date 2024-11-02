import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../../../firebase.config';

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const url = form.get('url')
        const password = form.get('password')
        console.log(name, email, url, password);

        // create user auth
        createUser( email, password )
        .then((result) => {
            const user = result.user
            console.log(user);

            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: url,
            }).then(() => {
                console.log("Profile updated successfully!");
            })
            .catch(error => {
                console.error(error);
                
            })
            
        })
        .catch((error) => {
            const errorCode = error.code
            console.log(errorCode);
            
            
        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">
                        "Visit the world's longest natural sea beach in <span className='text-pretty text-emerald-700 underline'>Cox's Bazar</span>, where golden sands meet the turquoise waters of the Bay of Bengal. A haven for beach lovers and sunset chasers."
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="https://example.com" pattern='https://.*' name='url' className="input input-bordered" required />
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
                            <p>Already have an account please? <Link to='/login'><button className="btn-link font-bold">Login</button></Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;