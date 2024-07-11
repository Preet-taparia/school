import { useFormik } from 'formik';
import { Fragment, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Input } from './components/Input/Input';
import { Select } from './components/Select/Select';
import styles from './Form.module.css';
import Button from '../Button/Button';

const InitialValues = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
  class: '',
  parentName: '',
};

const RegisterForm = () => {
  const [mailSendStatus, setMailSendStatus] = useState('');

  const {
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: InitialValues,

    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      mobile: Yup.string().required('Mobile number is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      class: Yup.string().required().notOneOf(['Select class']),
      parentName: Yup.string().required('Parent name is required'),
    }),

    onSubmit: (values, { resetForm }) => {
      setMailSendStatus('In Progress');
      fetch('/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.status === 200) {
            resetForm();
            setMailSendStatus('Success');
          }
        })
        .catch((err) => {
          setMailSendStatus('Error');
          console.error(err);
        });
    },
  });

  useEffect(() => {
    if (mailSendStatus === 'No Valid' && Object.keys(errors).length === 0) {
      if (isValid) {
        setMailSendStatus('');
      }
    }
  }, [values, errors, isValid, mailSendStatus]);

  const SendButton = () => {
    switch (mailSendStatus) {
      case '':
        return (
          <Button
            dataCypress="send-button"
            label="Submit Contact Form"
            onClick={() => {
              handleSubmit();
              if (!isValid) {
                setMailSendStatus('No Valid');
              }
            }}
            buttonColor="bg-[#FAC13C]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );

      case 'Success':
        return (
          <Button
            label="Message Sent Successfully"
            onClick={() => handleSubmit()}
            buttonColor="bg-[#00C213]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );

      case 'In Progress':
        return (
          <Button
            label="Sending..."
            onClick={() => handleSubmit()}
            buttonColor="bg-[#FAC13C]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );

      case 'No Valid':
        return (
          <Button
            label="Fill in the required fields!"
            onClick={() => handleSubmit()}
            buttonColor="bg-[red]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );



      default:
        return (
          <Button
            label="Form Correctly Filled"
            onClick={() => handleSubmit()}
            buttonColor="bg-[#green]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );
    }
  };

  return (
    <Fragment>
      <div className={styles['section-container']}>
        <Input
          label="First Name*"
          name="firstName"
          placeholder="Enter student's first name"
          handleChange={handleChange}
          value={values.firstName}
          handleBlur={handleBlur}
          error={touched.firstName ? errors.firstName : ''}
        />
        <Input
          label="Last Name*"
          name="lastName"
          placeholder="Enter student's last name"
          handleChange={handleChange}
          value={values.lastName}
          handleBlur={handleBlur}
          error={touched.lastName ? errors.lastName : ''}
        />
        <Input
          label="Mobile*"
          name="mobile"
          placeholder="Enter mobile number"
          handleChange={handleChange}
          value={values.mobile}
          handleBlur={handleBlur}
          error={touched.mobile ? errors.mobile : ''}
        />
        <Input
          label="Email*"
          name="email"
          placeholder="Enter parent's email"
          handleChange={handleChange}
          value={values.email}
          handleBlur={handleBlur}
          error={touched.email ? errors.email : ''}
          type="email"
        />
        <Select
          placeholder="Select class"
          label="Select class"
          selectedValue={values.class}
          valueList={[
            'Playgroup',
            'Nursery',
            'LKG',
            'UKG',
            'Class 1',
            'Class 2',
            'Class 3',
            'Class 4',
            'Class 5',
            'Class 6',
            'Class 7',
            'Class 8',
            'Class 9',
            'Class 10',
          ]}
          name="class"
          setFieldValue={(name, value) => setFieldValue(name, value)}
          error={touched.class ? errors.class : ''}
        />
        <Input
          label="Parent Name*"
          name="parentName"
          placeholder="Enter parent name"
          handleChange={handleChange}
          value={values.parentName}
          handleBlur={handleBlur}
          error={touched.parentName ? errors.parentName : ''}
        />
      </div>

      <div className={styles['button-container']}>
        <SendButton />
      </div>
    </Fragment>
  );
};

export default RegisterForm;
