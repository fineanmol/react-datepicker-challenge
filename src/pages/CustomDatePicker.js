import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/CustomDatePicker.module.css';

const holidays = [
  { date: new Date('2023-08-08'), name: 'Bank Holiday' },
  { date: new Date('2023-08-15'), name: 'Independence Day' },
  { date: new Date('2023-10-25'), name: 'Diwali' }, 
  { date: new Date('2023-11-20'), name: 'Good Friday' },
  { date: new Date('2023-12-25'), name: 'Christmas Day' },
];

const isHoliday = (date) => {
  return holidays.some(holiday => holiday.date.toDateString() === date.toDateString());
};

const renderCustomDayContents = (day, date, selectedDate, isInMonth) => {
  const holiday = isHoliday(date);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    console.log('Date Selected:', date); 
    
  };

  const handleClick = () => {
    if (isInMonth) {
      handleDateClick(date);
    }
  };

  return (
    <div
      className={`${styles.dayWrapper} ${holiday ? styles.holiday : ''} ${
        selectedDate && selectedDate.toDateString() === date.toDateString()
          ? styles.selectedDate
          : ''
      }`}
      onClick={handleClick}
    >
      {holiday && <div className={styles.holidayBackground} />}
      <div className={styles.holidayText}>{getHolidayName(date)}</div>
      <div className={styles.holidayOverlay}>{day}</div>
    </div>
  );
};

const getHolidayName = (date) => {
  const holiday = holidays.find(h => h.date.toDateString() === date.toDateString());
  return holiday ? holiday.name : '';
};

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    console.log('Date Selected:', date); 
  };

  return (
    <DatePicker
      renderDayContents={(day, date, selectedDate, isInMonth) =>
        renderCustomDayContents(day, date, selectedDate, isInMonth)
      }
      selected={selectedDate}
      shouldCloseOnSelect={false} 
      onChange={handleDateClick}
    />
  );
};

export default CustomDatePicker;
