import { Fragment, useRef } from 'react';
import { PageHeader } from '../components/PageHeader/PageHeader';
import useWindowDimensions from '../hooks/useWindowDimensions';
import BgDesktop from '../public/assets/headers/bgRecruitmentDesktop.jpg';
import BgMobile from '../public/assets/headers/bgRecruitmentMobile.jpg';
import RegisterForm from '../components/Form/RegisterForm';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const executeScroll = () => {
    if (ref?.current?.offsetTop)
      window.scroll({
        top:
          ref?.current?.offsetTop -
          (width && width > 1280 ? 0 : width && (width < 768 ? 60 : 100))!,
        left: 0,
        behavior: 'smooth',
      });
  };

  return (
    <Fragment>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="Enroll your child"
        titleSpan=""
        paragraph="Fill the form"
        buttonTitle="Form"
        onClick={executeScroll}
      />
      <div
        ref={ref}
        className="w-full flex flex-col py-10 px-5 md:mx-8 md:w-auto xl:mx-[110px] 2xl:mx-auto 2xl:px-[200px] max-w-[1920px]"
      >

        <RegisterForm />
      </div>
    </Fragment>
  );
}
