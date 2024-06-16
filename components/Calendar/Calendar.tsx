import React from 'react';
import { Calendar as BigCalendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import styles from './Calendar.module.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

interface CalendarProps {
  initialView?: string;
  initialDate?: string;
  selectable?: boolean;
  editable?: boolean;
  className?: string;
}

const MonthlyCalendar: React.FC<CalendarProps> = ({
  initialView = 'month',
  initialDate = moment().toDate(),
  selectable = false,
  editable = false,
  className
}) => {
  const events: Event[] = [
    {
      title: 'All day conference',
      start: new Date('2024-11-04'),
      end: new Date('2024-11-06'),
      className: styles.success,
    },
    {
      title: 'Meeting with Mary',
      start: new Date('2024-11-10'),
      end: new Date('2024-11-10'),
      className: styles.info,
    },
    {
      title: 'Winter Hackathon',
      start: new Date('2024-11-22'),
      end: new Date('2024-11-25'),
      className: styles.error,
    },
  ];

  return (
    <div  className={`${className}`} style={{ height: '100vh' }}>
      <BigCalendar
        localizer={localizer}
        defaultView={initialView as any}
        defaultDate={new Date(initialDate)}
        events={events}
        views={['month']}
        selectable={selectable}
        resizable={editable}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default MonthlyCalendar;
