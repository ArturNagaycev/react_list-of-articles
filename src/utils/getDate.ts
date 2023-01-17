export const getDate = (date: string): string => {
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
    'December',
  ];
  const dateFormat = new Date(date);

  return (
    `${monthNames[dateFormat.getMonth()]} ` +
    `${dateFormat.getDate()}th, ` +
    `${dateFormat.getFullYear()}`
  );
};
