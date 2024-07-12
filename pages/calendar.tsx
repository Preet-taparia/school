import { Fragment } from 'react';
import CalendarMultiEvents from '../components/CalendarMultiEvents/CalendarMultiEvents';
import CalendarSingleEvent from '../components/CalendarSingleEvent/CalendarSingleEvent';
import HeaderWithBubbles from '../components/HeaderWithBubbles/HeaderWithBubbles';
import { PageHeader } from '../components/PageHeader/PageHeader';
import BgDesktop from '../public/assets/headers/bgCalendarDesktop.jpg';
import BgMobile from '../public/assets/headers/bgCalendarMobilee.jpg';
import MonthlyCalendar from '../components/Calendar/Calendar';
import eventsData from '../data/events.json';
import { EventsData } from '../types/events';

const events: EventsData = eventsData;

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
      <HeaderWithBubbles header="Calendar for the Year 2024 - 2025" />
      
      <div className="xl:flex xl:flex-wrap xl:justify-between max-w-[1300px] xl:mx-auto">
        <MonthlyCalendar className="xl:w-full" events={events.calendarEvents} />

        {events.singleEvents.map((event, index) => (
          <CalendarSingleEvent key={index} header={event.header} dates={event.dates} />
        ))}
      </div>
      <div className="pb-[50px] max-w-[1300px] mx-auto xl:pb-[100px]">
        <CalendarMultiEvents header="Other Important Dates" dates={events.multiEvents} />
      </div>
    </Fragment>
  );
};

export default Calendar;
