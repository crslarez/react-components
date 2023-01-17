import { Component, useState } from "react";
import "./Header.css";
// class Header extends Component {
//   render() {
//     const [isOpen, setIsOpen] = useState(false)
//     return (
//       <>
//         <div className="navbar">
//           <div className="nav-logo">loopstudio</div>
//           <div className={`nav-items ${isOpen && "open"}`}>
//             <a href="#">About</a>
//             <a href="#">Carrers</a>
//             <a href="#">Events</a>
//             <a href="#">Products</a>
//             <a href="#">Support</a>
//           </div>
//           <div className={`nav-toogle ${isOpen && "open"}`} id="burger" onClick={() => setIsOpen(!isOpen)}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

import React from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <div className="navbar">
          <div className="nav-logo">loopstudio
            <h2 className="text-navbar">IMMERSIVE EXPERIENCES THAT DELIVER</h2>
          </div>
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="#">About</a>
            <a href="#">Carrers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
          </div>
          <div className={`nav-toogle ${isOpen && "open"}`} id="burger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </>
    );
}


export default Header;
