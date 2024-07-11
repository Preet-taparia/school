import { Fragment } from 'react';
import styles from './PopUp.module.css';
import Image from 'next/image';
import closeIcon from "../../public/assets/news/closeIcon.svg"

const PopUp = ({ show, onClose, children }) => {
    if (!show) {
        return null;
      }
    
  return (
    <Fragment>
      <div className={styles['modal-backdrop']} onClick={onClose} />
      <div className={styles['modal-content']}>
        {children}
        <button className={styles['modal-close']} onClick={onClose}>
          <Image src={closeIcon} alt='X'/>
        </button>
      </div>
    </Fragment>  )
}

export default PopUp