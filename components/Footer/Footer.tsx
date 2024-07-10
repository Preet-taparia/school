import Image from 'next/image';
import styles from './Footer.module.css';
import Logo from '../../public/assets/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-header-container']}>
        <h4 className={styles['footer-header-text']}>
          The Shining Star School
        </h4>
        <div className={styles['footer-logo-container']}>
          <Image src={Logo} alt="logo" className={styles['footer-logo']} />
        </div>
      </div>

      <div className={styles['footer-content-grid']}>
        <div className={styles['footer-content-box']}>
          <p className="font-bold">Contact</p>
          <div className="mt-5">
            <p>Ganesh Nagar</p>
            <p>Niwaru Road</p>
            <p>Jhotwara, Jaipur</p>
          </div>
          <div className="mt-5">
            <p>
              Ph. <b>941 445 6312</b>
            </p>
            <p>
              Ph. <b>941 401 7518</b>
            </p>
            <p>
              mail: <b>theshiningstar626@gmail.com</b>
            </p>
          </div>
        </div>

        <div className={styles['footer-content-box']}>
          <p className="font-bold">Quick Links</p>
          <div className="mt-5">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Admission</p>
            <p>Gallery</p>
            <p>Events</p>
          </div>
        </div>

        <div className={styles['footer-content-box']}>
          <p className="font-bold">Working hours</p>
          <div className="mt-5">
            <b>Fees</b>
            <p>Monday - Friday: 08:00 - 12:00</p>
          </div>
          <div className="mt-5">
            <b>Principal</b>
            <p>Monday - Friday: 07:30 - 15:30</p>
          </div>
        </div>

        <div className={styles['footer-content-box']}>
          <p className="font-bold">Campus</p>
          <div className="mt-5">
            <b>Working hours</b>
            <p>Monday - Friday: 07:15 - 17:30</p>
          </div>
          <div className="mt-5">
            <b>Contact</b>
            <p>Class 1-5: <b>570 907 110</b></p>
            <p>Class 6-8: <b>533 890 098</b></p>
            <p>Class 9-10: <b>730 926 556</b></p>
          </div>
        </div>
      </div>

      <div className={styles['footer-school-name']}>
        <p>© 2024</p>
        <p>The Shining Star School</p>
      </div>

      <div className={styles['footer-authors-box']}>
        <p>
          Designed by: <b>Preet Taparia</b>
        </p>
        <p>
          Developed by: <b>Preet Taparia</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
