import React from 'react';
import { Calendar as BigCalendar, momentLocalizer, EventProps } from 'react-big-calendar';
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

const parseDate = (dateStr: string) => {
  const clean = dateStr.split('(')[0].trim();
  return moment(clean, 'D MMMM YYYY').toDate();
};

const parseRange = (rangeStr: string) => {
  const [start, end] = rangeStr.split(' - ');
  return {
    start: parseDate(start),
    end: parseDate(end),
  };
};

const eventStyleGetter = () => ({
  style: {
    backgroundColor: '#1a56db',
    borderRadius: '4px',
    color: 'white',
    border: 'none',
    fontSize: '0.75rem',
    padding: '2px 4px',
    overflow: 'hidden',
    whiteSpace: 'nowrap' as const,
    textOverflow: 'ellipsis',
  },
});

const CustomEvent = ({ event }: EventProps) => (
  <span title={event.title} style={{ fontSize: '0.72rem', fontWeight: 500 }}>
    {event.title}
  </span>
);

const MonthlyCalendar: React.FC<CalendarProps> = ({
  initialView = 'month',
  initialDate,
  selectable = false,
  className,
}) => {
  const calendarEvents = eventsData.calendarEvents.map(event => ({
    title: event.title,
    start: new Date(event.start),
    end: new Date(event.end),
  }));

  const singleEvents = eventsData.singleEvents.flatMap(group =>
    group.dates.map(date => ({
      title: group.header,
      start: parseDate(date),
      end: parseDate(date),
    }))
  );

  const multiEvents = eventsData.multiEvents.map(event => {
    if (event.date.includes(' - ')) {
      const range = parseRange(event.date);
      return {
        title: event.label,
        start: range.start,
        end: range.end,
      };
    }

    const date = parseDate(event.date);
    return {
      title: event.label,
      start: date,
      end: date,
    };
  });

  const allEvents = [...calendarEvents, ...singleEvents, ...multiEvents];

  return (
    <div className={className} style={{ height: '100vh', minHeight: 600 }}>
      <BigCalendar
        localizer={localizer}
        defaultView={initialView as any}
        defaultDate={initialDate ? new Date(initialDate) : moment().toDate()}
        events={allEvents}
        views={['month']}
        selectable={selectable}
        style={{ height: '100%' }}
        eventPropGetter={eventStyleGetter}
        components={{ event: CustomEvent }}
        popup
        showMultiDayTimes
      />
    </div>
  );
};

export default MonthlyCalendar;