import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { TfiAlignJustify } from 'react-icons/tfi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const links = <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/'><li><a>All Tourists Spot</a></li></NavLink>
        <NavLink to='/'><li><a>Add Tourists Spot</a></li></NavLink>
        <NavLink to='/'><li><a>My List</a></li></NavLink>
    </>
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
                <Link><button className='btn btn-link'>Login</button></Link>
                <span>or</span>
                <Link><button className='btn btn-link'>Register</button></Link>
            </div>
        </div>
    );
};

export default Header;