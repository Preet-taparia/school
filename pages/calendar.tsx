import { Fragment } from 'react';
import CalendarMultiEvents from '../components/CalendarMultiEvents/CalendarMultiEvents';
import CalendarSingleEvent from '../components/CalendarSingleEvent/CalendarSingleEvent';
import HeaderWithBubbles from '../components/HeaderWithBubbles/HeaderWithBubbles';
import { PageHeader } from '../components/PageHeader.tsx/PageHeader';
import BgDesktop from '../public/assets/headers/bgCalendarDesktop.jpg';
import BgMobile from '../public/assets/headers/bgCalendarMobilee.jpg';
import MonthlyCalendar from '../components/Calendar/Calendar';


const Calendar = () => {
  return (
    <Fragment>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="School Calendar"
        titleSpan="Year 2024 - 25"
        paragraph="If you are wondering when the important days for school life fall, all you have to do is check the date in our calendar."
        buttonTitle="Check the Calendar"
        onClick={() => null}
      />
      <HeaderWithBubbles header="Calendar of the Year 2024 - 2025" />
      
      <div className="xl:flex xl:flex-wrap xl:justify-between max-w-[1300px] xl:mx-auto">
        <MonthlyCalendar className="xl:w-full" />
        <div className="xl:w-full">
          <CalendarSingleEvent
            single
            header="School Commences from"
            dates={['1 June 2024']}
          />
        </div>

        <CalendarSingleEvent
          header="Parent Teacher Meetings"
          dates={[
            '5 July 2024',
            '6 September 2024',
            '8 November 2024',
            '10 January 2025',
            '7 March 2025',
            '9 May 2025',
          ]}
        />

        <CalendarSingleEvent
          header="Days off from classes"
          dates={[
            '15 August 2024 (Independence Day)',
            '2 October 2024 (Gandhi Jayanti)',
            '24 October 2024 (Dussehra)',
            '31 October 2024 (Diwali)',
            '25 December 2024 (Christmas)',
            '1 January 2025 (New Year\'s Day)',
            '26 January 2025 (Republic Day)',
            '6 March 2025 (Holi)',
            '14 April 2025 (Dr. Ambedkar Jayanti)',
            '1 May 2025 (Maharashtra Day)',
          ]}
        />
      </div>
      <div className="pb-[50px] max-w-[1300px] mx-auto xl:pb-[100px]">
        <CalendarMultiEvents
          header="Other Important Dates"
          dates={[
            { label: 'School Reopens', date: '1 June 2024' },
            { label: 'Investiture Ceremony', date: '5 July 2024' },
            { label: 'Annual Sports Day', date: '20 August 2024' },
            { label: 'Teacher\'s Day Celebration', date: '5 September 2024' },
            { label: 'Annual Day', date: '15 November 2024' },
            { label: 'Christmas Celebration', date: '24 December 2024' },
            { label: 'Winter Break', date: '25 December 2024 - 1 January 2025' },
            { label: 'Science Exhibition', date: '10 February 2025' },
            { label: 'Holi Celebration', date: '6 March 2025' },
            { label: 'Final Exams', date: '1 April 2025 - 20 April 2025' },
            { label: 'Summer Vacation', date: '1 May 2025 - 31 May 2025' },
          ]}
        />
      </div>
    </Fragment>
  );
};

export default Calendar;
