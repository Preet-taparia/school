import Image from 'next/image';
import Link from 'next/link';
import styles from './PageHeader.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import ArrowBlue from '../../public/assets/rightDarkBlueArrow.svg';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';

interface IProps {
  title: string;
  titleSpan: string;
  titleSpanColor?: string;
  paragraph: string;
  onClick: () => void;
  buttonTitle: string;
  bgUrl: any;
  bgXlUrl: any;
  textContainerStyles?: any;
  checkKindergarten?: boolean;
}

export const PageHeader = ({
  onClick,
  title,
  titleSpan,
  titleSpanColor,
  paragraph,
  buttonTitle,
  bgUrl,
  bgXlUrl,
  textContainerStyles,
  checkKindergarten = false,
}: IProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className={` ${styles.container} `}>
      {width && width >= 1280 && <Navbar className={undefined} />}
      <div className="w-full h-full absolute z-[-1]">
        {width && (
          <Image
            data-cypress="headerImage"
            src={width >= 1280 ? bgXlUrl : bgUrl}
            alt="head iamge"
            className="w-full object-cover h-full"
            loading="eager"
            quality={100}
            priority
          />
        )}
      </div>
      
      <div className={`${textContainerStyles} ${styles['texts-container']}`}>
        <div>
          <h1 data-cypress="header1" className={styles['header1']}>
            {title}
          </h1>
          <span
            style={{ color: titleSpanColor ? titleSpanColor : '#FAC13C' }}
            className={styles['header1-span']}
          >
            {titleSpan}
          </span>
        </div>
        <p className={styles['paragraph']}>{paragraph}</p>
        <Button
          dataCypress="headerButton"
          label={buttonTitle}
          onClick={onClick}
          className={styles['button']}
          arrowSrc={ArrowBlue}
        />
      </div>
    </div>
  );
};