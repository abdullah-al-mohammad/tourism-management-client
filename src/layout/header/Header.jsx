import { Link, NavLink } from 'react-router-dom';
import { useState, useContext } from 'react'
import logo from '../../assets/logo.png'
import { TfiAlignJustify } from 'react-icons/tfi';
import { AiOutlineClose } from 'react-icons/ai';
import { AuthContext } from '../../components/provider/AuthProvider';
import profile from '../../assets/profile.png'
import Swal from 'sweetalert2';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { user, signOutUser } = useContext(AuthContext)
	const links = <>
		<li>
			<NavLink to='/'>Home</NavLink>
		</li>
		<li>
			<NavLink to='/allSpot'>All Tourists Spot</NavLink>
		</li>
		<li>
			<NavLink to='/addSpot'>Add Tourists Spot</NavLink>
		</li>
		<li>
			<NavLink to='/myList'>My List</NavLink>
		</li>
	</>


	const handleSignOut = () => {
		signOutUser()
			.then(() => {
				Swal.fire("logout successfully");
			}).catch((error) => {
				console.error(error);

			})
	}
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0}
						role="button"
						aria-expanded={isOpen}
						aria-controls='dropdown-menu'
						onClick={() => setIsOpen(!isOpen)}
						className="btn btn-ghost lg:hidden">
						{
							isOpen ? <AiOutlineClose></AiOutlineClose> : <TfiAlignJustify></TfiAlignJustify>
						}
					</div>
					{
						isOpen && (
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
								{links}
							</ul>
						)
					}
				</div>
				<img className='w-20' src={logo} alt="" />
				<a className="btn btn-ghost text-xl">Globetrail</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{links}
				</ul>
			</div>
			<div className="navbar-end">
				<div>
					{
						user ? <img className='w-8 h-8 rounded-full'
							src={user?.photoURL}
							alt=""
							title={user.displayName}
						/>
							:
							<img className='w-8 h-8 rounded-full'
								src={profile}
								alt=""
								title='Guest'
							/>
					}
				</div>
				<div className='ml-3'>
					{
						user ? <button onClick={handleSignOut} className='btn btn-active text-red-600'>Logout</button>
							:
							<div>
								<Link to='/login'><button className='btn btn-link'>Sign In</button></Link>
								<span>or</span>
								<Link to='/register'><button className='btn btn-link'>Register</button></Link>
							</div>
					}
				</div>
			</div>
		</div>
	);
};

export default Header;