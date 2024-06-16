import styles from '../FormComponents.module.css';

interface IProps {
  label: string;
  name: string;
  setFieldValue: any;
  error?: string;
}

const RadioButtons = ({ error, label, setFieldValue, name }: IProps) => {
  return (
    <div className={styles['radio-buttons-box']}>
      <label
        className={`${error && error.length > 0 && styles['label-error']} ${
          styles.label
        }`}
      >
        {label} {error && '- Error'}
      </label>
      <div
        className={`${error && error.length > 0 && styles['radio-error']} ${
          styles['radio-container']
        }`}
      >
        <div className={styles['radio-button']}>
          <input
            type="radio"
            className={` ${styles.radio}`}
            name={name}
            id={`${name}1`}
            onChange={() => setFieldValue(name, true)}
          />
          <label htmlFor={`${name}1`}>Tak</label>
        </div>

        <div className={styles['radio-button']}>
          <input
            type="radio"
            className={styles.radio}
            name={name}
            id={`${name}2`}
            onChange={() => setFieldValue(name, false)}
          />
          <label htmlFor={`${name}2`}>Nie</label>
        </div>
      </div>
    </div>
  );
};

export default RadioButtons;
