


import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//   };

//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/songs">Songs</Link></li>
//         {isLoggedIn ? (
//           <>
//             <li><Link to="/Favorites">Favorites</Link></li>
//             <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
//           </>
//         ) : (
//           <li><Link to="/login">Login</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/songs" className="navbar-link">Songs</Link></li>
        {isLoggedIn ? (
          <>
            <li className="navbar-item"><Link to="/Favorites" className="navbar-link">Favorites</Link></li>
            <li className="navbar-item">
  <a href="https://api.whatsapp.com/send?phone=7204204685" className="navbar-link">Contact</a>
</li>
            <li className="navbar-item"><Link to="/login" onClick={handleLogout} className="navbar-link">Logout</Link></li>
          </>
        ) : (
          <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar