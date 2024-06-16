import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Logo from '../../public/assets/logo.svg';
import Hamburger from '../Hamburger/Hamburger';

const Navbar = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fix, setFix] = useState(false);
  const router = useRouter();
  const { width } = useWindowDimensions();

  const toggleHamburger = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const setFixed = () => {
    if (window.scrollY >= 500) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', setFixed);
      return () => {
        window.removeEventListener('scroll', setFixed);
      };
    }
  }, []);

  return (
    <nav
      className={`${className} ${fix ? styles['navbar-fixed'] : styles.navbar}`}
      role="navigation"
      aria-label="Main"
    >
      <div onClick={() => router.push('/')} className="w-[70px] xl:w-[100px] hover:cursor-pointer">
        <Image src={Logo} alt="Home" />
      </div>
      
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksMobile : ''}`}>
        <Link href="/articles" className={`${router.route === '/articles' ? styles['navbar-selected'] : ''} ${styles['navbar-a']}`}>
        Articles
        </Link>
        <Link href="/about-us" className={`${router.route === '/about-us' ? styles['navbar-selected'] : ''} ${styles['navbar-a']}`}>
          About Us
        </Link>
        <Link href="/calendar" className={`${router.route === '/calendar' ? styles['navbar-selected'] : ''} ${styles['navbar-a']}`}>
          Calendar
        </Link>
        <Link href="/gallery" className={`${router.route === '/gallery' ? styles['navbar-selected'] : ''} ${styles['navbar-a']}`}>
          Gallery
        </Link>
        <Link href="/why-us" className={`${router.route === '/why-us' ? styles['navbar-selected'] : ''} ${styles['navbar-a']}`}>
          Why Us
        </Link>
        <Link href="/admission" className={`${router.route === '/admission' ? styles['navbar-selected'] : ''} ${styles['navbar-a']}`}>
          Admission
        </Link>
        <Link href="/contact" className={`${router.route === '/contact' ? styles['navbar-selected'] : ''} ${styles['navbar-a']}`}>
          Contact Us
        </Link>
      </div>

      {width < 1280 && (
        <Hamburger toggleHamburger={toggleHamburger} isOpen={isMenuOpen} />
      )}
    </nav>
  );
};

export default Navbar;
