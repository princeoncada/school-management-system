'use client';

import Image from "next/image";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY DATA
const events = [
  {
    id: 1,
    title: 'Event 1',
    time: '10:00 AM - 11:00 AM',
    description: 'Description for Event 1',
  },
  {
    id: 2,
    title: 'Event 2',
    time: '1:00 PM - 2:00 PM',
    description: 'Description for Event 2',
  },
  {
    id: 3,
    title: 'Event 3',
    time: '3:00 PM - 4:00 PM',
    description: 'Description for Event 3',
  },
]

const EventCalendar = () => {
  const [calendarValue, setCalendarValue] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={setCalendarValue} value={calendarValue} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {
          events.map((event) => (
            <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-school-sky even:border-t-school-purple" key={event.id}>
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-300 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EventCalendar