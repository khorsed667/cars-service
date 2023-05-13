import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.svg'

const Navbar = () => {

    const compo = <>
        <Link to="/"><a className='ps-4'>Home</a></Link>
        <Link to="/about"><a className='ps-4'>About</a></Link>
    </>

    return (
        <div className="navbar bg-base-200 h-20 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {compo}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='w-2/4' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {compo}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appoinment</button>
            </div>
        </div>
    );
};

export default Navbar;