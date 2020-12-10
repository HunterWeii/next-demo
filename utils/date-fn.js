const MONTH = [
  "JAN",
  "FEB",
  "MARCH",
  "APR",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC"
];

const DAY = [
  "",
  "MONDAY",
  "TUESDAY",
  "WENDESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY"
];

export default function dateFns() {
  const date = new Date();
  return {
    date: date.getDate(),
    month: MONTH[ date.getMonth() ],
    year: date.getFullYear(),
    day: DAY[ date.getDay() ]
  }
}