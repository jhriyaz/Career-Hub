import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="container pt-6 mx-auto flex flex-col lg:flex-row text-center gap-4 lg:gap-0 lg:justify-between lg:items-center">
<Link to='/'> <h1 className="text-tittle text-3xl ">CareerHub</h1></Link>

<ul className="lg:flex gap-9 navBarLinks text-base font-bold">
    <li><NavLink to='/statistics'>Statistics</NavLink></li>
    <li><NavLink to='/applied-jobs'>Applied Jobs</NavLink></li>
    <li><NavLink to='/blog'>Blog</NavLink></li>
</ul>
<Link to=''><button className="btn-custom px-7 py-5 ">Star Applying</button></Link>
        </nav>
    );
};

export default NavBar;