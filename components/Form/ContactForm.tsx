import { Fragment, useState } from 'react';
import { Input } from './components/Input/Input';
import Button from '../Button/Button';
import styles from './Form.module.css';
import { Textarea } from './components/Textarea/Textarea';
import HeaderWithBubbles from '../HeaderWithBubbles/HeaderWithBubbles';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const [mailSendStatus, setMailSendStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMailSendStatus('In Progress');
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (res.status === 200) {
                    setFormData({
                        fullName: '',
                        email: '',
                        message: '',
                    });
                    setMailSendStatus('Success');
                } else {
                    throw new Error('Error sending message');
                }
            })
            .catch((err) => {
                setMailSendStatus('Error');
                console.error(err);
            });
    };

    return (
        <Fragment>
            <HeaderWithBubbles header='Contact Form' />
            <form className={styles['contact-form']} onSubmit={handleSubmit}>
                <div className={styles['section-container']}>
                    <Input
                        label="Full Name"
                        name="fullName"
                        placeholder="Enter your full name"
                        handleChange={handleChange}
                        value={formData.fullName}
                        handleBlur={undefined}
                    />
                    <Input
                        label="Email Address"
                        name="email"
                        placeholder="Enter your email address"
                        handleChange={handleChange}
                        value={formData.email}
                        handleBlur={undefined}
                    />
                    <Textarea
                        label="Message"
                        name="message"
                        placeholder="Enter your message"
                        handleChange={handleChange}
                        value={formData.message}
                        handleBlur={undefined}
                    />
                    <div className={styles['button-container']}>
                        <Button
                            label="Send Message"
                            buttonColor="bg-[#FAC13C]"
                            textColor="text-[#ffffff]"
                            className={styles['send-button']}
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </form>
            {mailSendStatus && (
                <p className={styles['status-message']}>
                    {mailSendStatus === 'Success'
                        ? 'Message Sent Successfully'
                        : mailSendStatus === 'In Progress'
                            ? 'Sending...'
                            : 'Error Sending Message'}
                </p>
            )}
        </Fragment>
    );
};

export default ContactForm;
