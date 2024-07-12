import React from 'react';
import { Calendar as BigCalendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import eventsData from '../../data/events.json';
import { Event as CalendarEvent } from '../../types/events';

const localizer = momentLocalizer(moment);

interface CalendarProps {
  initialView?: string;
  initialDate?: string;
  selectable?: boolean;
  className?: string;
  events?: CalendarEvent[];
}

const MonthlyCalendar: React.FC<CalendarProps> = ({
  initialView = 'month',
  initialDate = moment().toDate(),
  selectable = false,
  className,
  events = eventsData.calendarEvents
}) => {
  const formattedEvents = events.map(event => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end)
  }));

  return (
    <div className={className} style={{ height: '100vh' }}>
      <BigCalendar
        localizer={localizer}
        defaultView={initialView as any}
        defaultDate={new Date(initialDate)}
        events={formattedEvents}
        views={['month']}
        selectable={selectable}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default MonthlyCalendar;
