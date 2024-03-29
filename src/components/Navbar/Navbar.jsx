// import React from "react";
// import './Navbar.css'
// import sitLogo from '../../assets/logo.png'

// const Navbar = () => {
//     return (
//         <>
//             <div className="navbar">
//                 <div className="img">
//                     <img src={sitLogo} alt="Logo" style={{ width: '45px', height: '45px' , borderRadius : '50px', marginTop : '10px'}} />
//                 </div>

//                 <div className="navcomp">
//                     <div className="home">
//                         Home
//                     </div>
//                 </div>
//                 <div className="navcomp">
//                     <div className="Signup">
//                         SignUp
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './Navbar.css';
import sitLogo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="img">
                <img src={sitLogo} alt="Logo" style={{ width: '45px', height: '45px', borderRadius: '50px', marginTop: '10px' }} />
            </div>

            <div className="navcomp">
                <Link to="/" className="home">Home</Link> {/* Use Link for navigation */}
            </div>
            <div className="navcomp">
                <Link to="/signup" className="Signup">Signup</Link> {/* Use Link for navigation */}
            </div>
        </div>
    );
}

export default Navbar;

