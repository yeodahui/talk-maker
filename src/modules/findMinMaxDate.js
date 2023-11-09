export const findMinMaxDate = (array) => {
  const startDate = array[0].Date;
  const endDate = array[array.length - 1].Date;
  const minmax = {
    min: startDate.toISOString().slice(0, 10),
    max: endDate.toISOString().slice(0, 10),
  };

  console.log(minmax);

  return minmax;
};
