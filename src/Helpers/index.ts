const getCurrentDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return {
    day,
    month,
    year,
  };
};

const calcSum = (arr: number[]) => arr.reduce((sum, val) => sum + val, 0);

export { getCurrentDate, calcSum };
