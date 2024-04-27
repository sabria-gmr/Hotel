import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo4.gif';
import '../Styles/style.css';

const links = [
  { id: 'home', label: 'Accueil', path: '/' },
  { id: 'explore', label: 'Explore', path: '/explore' },
  { id: 'chambres', label: 'Chambres', path: '/chambres' },
  { id: 'restaurants', label: 'Restaurants', path: '/restaurants' },
  { id: 'propos', label: 'Apropos', path: '/propos' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

function Navbar() {
  const [activeLink, setActiveLink] = React.useState(null);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <nav className='bg-white dark:bg-black justify-between items-center pb-4 text-xl md:flex md:px-10 px-7 mt-5 mx-10 '>
      <div className='flex mb-1.5'> 
        <div className=' mt-2'>
          <Link to="/"><img src={Logo} width={48} height={44} alt='Logo' /></Link>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='mr-32 flex space-x-16 mt-2 font-semibold '>
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`nav-link ${activeLink === link.id ? 'text-beige' : 'text-blue-500 hover:text-beige'}`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className='bg-beige text-lg font-semibold text-white hover:bg-blue rounded-lg  w-auto py-2 px-2'> 
          <Link to="/reservation">Réserver Maintenant</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
