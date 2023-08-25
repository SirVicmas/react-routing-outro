import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";


function Landing(){
    return <div>
        <nav>
        <button><Link to="/quotes">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/contact">Contact</Link></button>
      </nav>
        <Outlet></Outlet>
        <p>This is code from the landing page</p>
      <Footer/>
    </div>
}

export default Landing;