export interface Event {
    title: string;
    start: string;
    end: string;
  }
  
  export interface SingleEvent {
    header: string;
    dates: string[];
  }
  
  export interface MultiEvent {
    label: string;
    date: string;
  }
  
  export interface EventsData {
    singleEvents: SingleEvent[];
    multiEvents: MultiEvent[];
    calendarEvents: Event[];
  }
  