import styles from './ContactData.module.css';

const ContactData = () => {
  return (
    <div className="w-full md:w-[40%] mx-auto">
      <div className={styles['section-container']}>
        <h5 className={styles['section-header']}>Contact Information</h5>
        <div>
          <div className={styles['section-inner-box']}>
            <p className="font-bold">Ganesh Nagar</p>
            <p className="font-bold">Niwaru Road</p>
            <p className="font-bold">Jhotwara, Jaipur</p>
          </div>
          <div className={styles['section-inner-box']}>
            <p>
              Ph. <span className="font-bold">941 445 6312</span>
            </p>
            <p>
              Ph. <span className="font-bold">941 401 7518</span>
            </p>
            <p>
              mail: <span className="font-bold">up28july@gmail.com</span>
            </p>
          </div>
          <div className={styles['section-inner-box']}>
            <p>
              Class 1-5 <span className="font-bold">570 907 110</span>
            </p>
            <p>
              Class 6-8: <span className="font-bold">533 890 098</span>
            </p>
            <p>
              Class 9-10: <span className="font-bold">730 926 556</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
