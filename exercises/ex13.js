/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings 
like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. 
We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, 
and returns a new human readable date that looks like December 2nd, 2017.
*/

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const daysNames = {
  1: '1st',
  2: '2nd',
  3: '3rd',
}

const talkingCalendar = function(date) {
  const [year, month, day] = date.split('/');
  const monthName = monthNames[parseInt(month) - 1];
  const dayInt = parseInt(day);
  let dayName = '';
  if (dayInt >= 1 && dayInt <= 3) {
    dayName = daysNames[dayInt];
  } else if (dayInt >= 21 && dayInt <= 23) {
    dayName = `${day[0]}${daysNames[day[1]]}`;
  } else {
    dayName = `${dayInt}th`;
  }

  return `${monthName} ${dayName}, ${year}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
console.log(talkingCalendar("1990/09/22")); // September 22nd, 1990
  