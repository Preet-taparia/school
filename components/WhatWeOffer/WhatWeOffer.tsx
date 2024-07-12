import Image from 'next/image';
import { Fragment } from 'react';
import styles from './WhatWeOffer.module.css';
import EyeIcon from '../../public/assets/about/EyeIcon.svg';
import LightIcon from '../../public/assets/about/LightIcon.svg';
import OwlImage from '../../public/assets/about/OwlImage.svg';
import PencilIcon from '../../public/assets/about/PencilIcon.svg';
import PeopleIcon from '../../public/assets/about/PeopleIcon.svg';
import RocketIcon from '../../public/assets/about/RocketIcon.svg';

const WhatWeOffer = () => {
  return (
    <Fragment>
      <div className={styles['owl-container']}>
        <div className={styles['owl-image-container']}>
          <Image src={OwlImage} alt="Grafika Sowa" />
        </div>
        <div className="xl:flex-1">
          <h4 className={styles['owl-header']}>Around 10 years in education</h4>

          <p className={styles['owl-paragraph']}>
            The Shining Star School is an institution with a rich baggage of
            experience.{' '}
            <span className={styles['owl-paragraph-bold']}>
              It is a school with many years of traditions resulting from such
              values as equality, respect, tolerance, justice and responsibility
            </span>{' '}
            We give joy to learning. We teach empathy, cooperation and actions
            for others. The driving force behind our scientific and creative
            activities is a friendly atmosphere.
          </p>
        </div>
      </div>

      <div className={styles['section-rocket-container']}>
        <div className={styles['section-icon-container']}>
          <Image src={RocketIcon} alt="Rakieta" />
        </div>
        <div className={styles['section-text-wrapper']}>
          <h4 className={styles['section-header']}>Modern Teaching Agents</h4>

          <p className={styles['section-paragraph']}>
            Each class is equipped with interactive touch boards, projectors and
            computers. We use innovative multimedia solutions:
          </p>

          <p className={styles['section-paragraph']}>
            <span className={styles['section-paragraph-bold']}>
              Smart Boards:
            </span>{' '}
            Interactive Boards, which are excellent tools for supporting
            learning.
          </p>
        </div>
      </div>
      <div className="xl:flex xl:flex-wrap xl:justify-between">
        <div className={styles['section-container']}>
          <div className={styles['section-icon-container']}>
            <Image src={LightIcon} alt="Żarówka" />
          </div>
          <div className={styles['section-text-wrapper']}>
            <h4 className={styles['section-header']}>
              Individual approach to the student
            </h4>

            <p className={styles['section-paragraph']}>
              Every child is a unique, special individual whom we help to find
              their potential. With small class sizes, we guarantee proper
              stimulation of cognitive, social, emotional and physical
              development.
            </p>
          </div>
        </div>

        <div className={styles['section-container']}>
          <div className={styles['section-icon-container']}>
            <Image src={PencilIcon} alt="Długopis" />
          </div>
          <div className={styles['section-text-wrapper']}>
            <h4 className={styles['section-header']}>
              With us, your child will not be bored
            </h4>

            <p className={styles['section-paragraph']}>
              A rich educational offer based on an interdisciplinary and
              holistic approach to the problems and issues addressed in the
              classes. We offer numerous extracurricular activities, workshops
              thematic workshops, sightseeing trips to the cinema, theater,
              philharmonic.
            </p>
          </div>
        </div>

        <div className={styles['section-container']}>
          <div className={styles['section-icon-container']}>
            <Image src={PeopleIcon} alt="Ludzie" />
          </div>
          <div className={styles['section-text-wrapper']}>
            <h4 className={styles['section-header']}>Specialist care</h4>

            <p className={styles['section-paragraph']}>
              teacher, psychologist, speech therapist, physiotherapist.
            </p>
          </div>
        </div>

        <div className={styles['section-container']}>
          <div className={styles['section-icon-container']}>
            <Image src={EyeIcon} alt="Ikona oka" />
          </div>
          <div className={styles['section-text-wrapper']}>
            <h4 className={styles['section-header']}>Security</h4>

            <p className={styles['section-paragraph']}>
              Monitoring at school and the care of Security Gaurd.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WhatWeOffer;
