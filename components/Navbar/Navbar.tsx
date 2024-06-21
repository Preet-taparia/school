import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Logo from '../../public/assets/logo.svg';
import Hamburger from '../Hamburger/Hamburger';

interface NavbarProps {
  className: string;
}

const Navbar = ({ className }: NavbarProps) => {
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

  const getLinkClassNames = (path: string) => {
    const isSelected = router.route === path;
    const isYellowBgRoute = router.route === '/contact' || router.route === '/about-us';
    
    if (isSelected) {
      if (isYellowBgRoute && !fix) {
        return `${styles['navbar-selected-has-yellow-bg']}`;
      }
      return `${styles['navbar-selected']}`;
    }
    return `${styles['navbar-a']}`;
  };

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
        <Link href="/articles" className={getLinkClassNames('/articles')}>
          Articles
        </Link>
        <Link href="/about-us" className={getLinkClassNames('/about-us')}>
          About Us
        </Link>
        <Link href="/calendar" className={getLinkClassNames('/calendar')}>
          Calendar
        </Link>
        <Link href="/gallery" className={getLinkClassNames('/gallery')}>
          Gallery
        </Link>
        <Link href="/why-us" className={getLinkClassNames('/why-us')}>
          Why Us
        </Link>
        <Link href="/admission" className={getLinkClassNames('/admission')}>
          Admission
        </Link>
        <Link href="/contact" className={getLinkClassNames('/contact')}>
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
