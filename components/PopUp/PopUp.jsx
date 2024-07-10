import { Fragment } from 'react';
import styles from './PopUp.module.css';

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
          &times;
        </button>
      </div>
    </Fragment>  )
}

export default PopUp