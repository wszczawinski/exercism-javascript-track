const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weeks = {
  first: 1,
  second: 8,
  third: 15,
  fourth: 22,
  teenth: 13,
  last: -6,
};

export const meetup = (year, monthNum, count, day) => {
  let month = count === "last" ? monthNum : monthNum - 1;

  const date = new Date(year, month, weeks[count]);

  while (date.getDay() !== days.indexOf(day)) {
    date.setDate(date.getDate() + 1);
  }

  return date;
};
