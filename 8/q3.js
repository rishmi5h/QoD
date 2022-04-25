const isWeekdayOrWeekend = (day) => {
  const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  return weekday.includes(day.toLowerCase())
    ? `${day} is weekday`
    : `${day} is weekend`;
};

console.log(isWeekdayOrWeekend("Tuesday"));
