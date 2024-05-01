import { useEffect, useState } from 'react';
import { logo } from '../../assets';
import './navbar.css';
import { navLinks } from '../../constants';
import { CgMenu } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const Menu = () => (
  <>
            <ul className="navbar-nav">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={link.path}>{link.text}</a>
              </li>
            ))}
          </ul>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.page-header');
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <header className="page-header">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#home">
            <img className="brand-logo" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-nav-wrap">
          <Menu />
        </div>
        <div className="donate-btn">
          <a className="button" href="">Donate</a>
        </div>
        <div className='navbar-menu'>
            <div className="navbar-menu_container-links-btn">
               <a className="button" href="">Donate</a>
             </div> 
          {toggleMenu
          ? <IoCloseSharp color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <CgMenu color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='navbar-menu_container'>
              <div className='navbar-menu_container-links'>
                 <Menu />  
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
