import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import * as Yup from 'yup';
import Checkbox from './components/Checkbox/Checkbox';
import { Input } from './components/Input/Input';
import RadioButtons from './components/RadioButtons/RadioButtons';
import { Select } from './components/Select/Select';
import { Textarea } from './components/Textarea/Textarea';
import styles from './Form.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import EllipsesLeft from '../../public/assets/EllipsesLeft.svg';
import EllipsesRight from '../../public/assets/EllipsesRight.svg';
import { GeneralData } from '../../types/general-data.type';
import { ParentsData } from '../../types/parents-data.type';
import { StudentData } from '../../types/student-data.type';
import Button from '../Button/Button';

const StudentInitialValues: StudentData = {
  fullName: '',
  peselOrPassportNumber: '',
  dateAndPlaceOfBirth: '',
  address: '',
  registeredAddress: '',
  districtSchoolData: '',
  healthCertificate: undefined,
  medicalOpinion: undefined,
  otherRelevantInformation: '',
};

const ParentsInitialValues: ParentsData = {
  parentFullName: '',
  parentAddress: '',
  email: '',
  phoneNumber: '',
};

const GeneralDataInitialValues: GeneralData = {
  schoolYear: '',
  class: '',
};

const RulesAndRODO = {
  rulesAccept: false,
  rodoAccept: false,
};

const RecruitmentForm = () => {
  const [mailSendStatus, setMailSendStatus] = useState('');
  const { width } = useWindowDimensions();

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
    initialValues: {
      ...StudentInitialValues,
      ...GeneralDataInitialValues,
      ...RulesAndRODO,
      ...ParentsInitialValues,
    },

    validationSchema: Yup.object({
      schoolYear: Yup.string().required().notOneOf(['Select school year']),
      class: Yup.string().required().notOneOf(['Select class']),
      fullName: Yup.string().required(),
      peselOrPassportNumber: Yup.string().required(),
      dateAndPlaceOfBirth: Yup.string().required(),
      address: Yup.string().required(),
      parentFullName: Yup.string().required(),
      parentAddress: Yup.string().required(),
      email: Yup.string().email().required(),
      phoneNumber: Yup.string().required(),
      rulesAccept: Yup.boolean().isTrue().required(),
      rodoAccept: Yup.boolean().isTrue().required(),
      healthCertificate: Yup.boolean().required(),
      medicalOpinion: Yup.boolean().required(),
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
            label="Submit Recruitment Form"
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
      <div className={styles['header2-container']}>
        <div className={styles['ellipses-left']}>
          <Image src={EllipsesLeft} alt="EllipsesLeft" />
        </div>

        <div className={styles['ellipses-right']}>
          <Image src={EllipsesRight} alt="EllipsesRight" />
        </div>

        <h2 className={styles.header2}>Online Recruitment</h2>
      </div>
      <div className={styles['section-container']}>
        <h3 className={styles.header3}>General Data</h3>
        <Select
          placeholder="Select class"
          label="Select class"
          selectedValue={values.class}
          valueList={[
            'Primary - class 1',
            'Primary - class 2',
            'Primary - class 3',
            'Primary - class 4',
            'Primary - class 5',
            'Primary - class 6',
            'Primary - class 7',
            'Primary - class 8',
          ]}
          name="class"
          setFieldValue={(name, value) => setFieldValue(name, value)}
          error={touched.class ? errors.class : ''}
        />

        <Select
          placeholder="Select school year"
          label="Select school year"
          selectedValue={values.schoolYear}
          valueList={['2022/2023', '2023/2024', '2024/2025', '2025/2026']}
          name="schoolYear"
          setFieldValue={(name, value) => setFieldValue(name, value)}
          error={touched.schoolYear ? errors.schoolYear : ''}
        />
      </div>

      <div className={styles['section-container']}>
        <h3 className={styles.header3}>Student Data</h3>
        <Input
          label="Full Name*"
          name="fullName"
          placeholder="Enter student's full name"
          handleChange={handleChange}
          value={values.fullName}
          handleBlur={handleBlur}
          error={touched.fullName ? errors.fullName : ''}
        />
        <Input
          label="PESEL (or passport number if no PESEL)*"
          placeholder="Enter PESEL number"
          name="peselOrPassportNumber"
          handleChange={handleChange}
          value={values.peselOrPassportNumber}
          handleBlur={handleBlur}
          error={
            touched.peselOrPassportNumber ? errors.peselOrPassportNumber : ''
          }
        />
        <Input
          label="Date and Place of Birth*"
          name="dateAndPlaceOfBirth"
          placeholder="Enter student's date and place of birth"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.dateAndPlaceOfBirth}
          error={touched.dateAndPlaceOfBirth ? errors.dateAndPlaceOfBirth : ''}
        />
        <Input
          label="Address*"
          name="address"
          placeholder="Enter student's address"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.address}
          error={touched.address ? errors.address : ''}
        />
        <Input
          label="Registered Address (if different from residence)"
          name="registeredAddress"
          placeholder="Enter student's registered address"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.registeredAddress}
          error={touched.registeredAddress ? errors.registeredAddress : ''}
        />
        <Input
          label="District School Name and Address"
          name="districtSchoolData"
          placeholder="Enter district school name and address"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.districtSchoolData}
          error={touched.districtSchoolData ? errors.districtSchoolData : ''}
        />

        <RadioButtons
          label="Does the student have a Psychological-Pedagogical Counseling Center opinion?*"
          name="medicalOpinion"
          setFieldValue={setFieldValue}
          error={touched.medicalOpinion ? errors.medicalOpinion : ''}
        />

        <RadioButtons
          label="Does the student have a health certificate?*"
          name="healthCertificate"
          setFieldValue={setFieldValue}
          error={touched.healthCertificate ? errors.healthCertificate : ''}
        />

        <Textarea
          label="Other relevant information (e.g., specific difficulties, health status, past illnesses, etc.)"
          name="otherRelevantInformation"
          placeholder="Enter other information about the student"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.otherRelevantInformation}
          error={
            touched.otherRelevantInformation
              ? errors.otherRelevantInformation
              : ''
          }
        />
      </div>
      <div className={styles['section-container']}>
        <h3 className={styles.header3}>Parent / Legal Guardian Data</h3>

        <Input
          label="Full Name"
          name="parentFullName"
          placeholder="Enter parent's / guardian's full name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.parentFullName}
          error={touched.parentFullName ? errors.parentFullName : ''}
        />

        <Input
          label="Address"
          name="parentAddress"
          placeholder="Enter parent's / guardian's address"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.parentAddress}
          error={touched.parentAddress ? errors.parentAddress : ''}
        />

        <Input
          label="Phone Number"
          name="phoneNumber"
          placeholder="Enter parent's / guardian's phone number"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.phoneNumber}
          error={touched.phoneNumber ? errors.phoneNumber : ''}
          type="tel"
        />

        <Input
          label="Email Address"
          name="email"
          placeholder="Enter parent's / guardian's email address"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.email}
          error={touched.email ? errors.email : ''}
          type="email"
        />
      </div>

      <div className={styles['agreements-section-container']}>
        <Checkbox
          name="rulesAccept"
          value={values.rulesAccept}
          error={touched.rulesAccept ? errors.rulesAccept : ''}
          setFieldValue={setFieldValue}
        >
          I confirm that I have read the information regarding the processing of my personal data available at{' '}
          <Link
            href="/Processing-Data.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              touched.rulesAccept && errors.rulesAccept
                ? 'text-[red]'
                : 'text-[#579CE2]'
            } `}
          >
            www.omegaschool.pl/processing-data
          </Link>
          , {width < 568 && <br />}
          and the{' '}
          <Link
            href="/Recruitment-Regulations.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              touched.rulesAccept && errors.rulesAccept
                ? 'text-[red]'
                : 'text-[#579CE2]'
            } `}
          >
            recruitment regulations.
          </Link>
        </Checkbox>

        <Checkbox
          name="rodoAccept"
          value={values.rodoAccept}
          setFieldValue={setFieldValue}
          error={touched.rodoAccept ? errors.rodoAccept : ''}
        >
          I consent to the processing of my personal data by the Social Educational Association with its registered office in Katowice, Gliwicka 276, for the purposes of the recruitment procedure to the OMEGA Social Primary School
        </Checkbox>
      </div>
      <div
        className={`py-4 md:py-6   ${styles['agreements-section-container']}`}
      >
        <div>
          <p className="text-center text-[#4F4F4F] text-[14px] block md:text-start md:text-[18px] xl:text-[14px] xl:block xl:w-full">
            The recruitment schedule is available at{' '}
            <Link
              href="/Schedule.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[14px] text-[#579CE2] md:text-[20px] xl:text-[14px]`}
            >
              www.omegaschool.pl/schedule
            </Link>
          </p>
        </div>
      </div>
      <div className={styles['button-container']}>
        <SendButton />
      </div>
    </Fragment>
  );
};

export default RecruitmentForm;
