import { useFormik } from 'formik';
import { Fragment, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Input } from './components/Input/Input';
import { Textarea } from './components/Textarea/Textarea';
import styles from './Form.module.css';
import Button from '../Button/Button';
import HeaderWithBubbles from '../HeaderWithBubbles/HeaderWithBubbles';

const InitialValues = {
  fullName: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [mailSendStatus, setMailSendStatus] = useState('');

  const {
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: InitialValues,

    validationSchema: Yup.object({
      fullName: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),

    onSubmit: (values, { resetForm }) => {
      setMailSendStatus('In Progress');
      fetch('/api/contact', {
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

      case 'Error':
        return (
          <Button
            label="Error Sending"
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
      <HeaderWithBubbles header='Need Support?' />
      <div className={styles['section-container']}>
        <Input
          label="Full Name*"
          name="fullName"
          placeholder="Enter your full name"
          handleChange={handleChange}
          value={values.fullName}
          handleBlur={handleBlur}
          error={touched.fullName ? errors.fullName : ''}
        />
        <Input
          label="Email*"
          name="email"
          placeholder="Enter your email"
          handleChange={handleChange}
          value={values.email}
          handleBlur={handleBlur}
          error={touched.email ? errors.email : ''}
          type="email"
        />
        <Textarea
          label="Message*"
          name="message"
          placeholder="Enter your message"
          handleChange={handleChange}
          value={values.message}
          handleBlur={handleBlur}
          error={touched.message ? errors.message : ''}
        />
      </div>

      <div className={styles['button-container']}>
        <SendButton />
      </div>
    </Fragment>
  );
};

export default ContactForm;
