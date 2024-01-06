import { Link, useNavigate } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate('/')
    }

    return(
        <div className="nav">
            <div className="nav-links">
            <img src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png" alt="logo" style={{width: "20%"}}/>
            <Link to="/products" className="links">Products</Link>
            <Link to="/about" className="links">About</Link>
            </div>
            <div>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>

        </div>
    )
}

export default Navbar;