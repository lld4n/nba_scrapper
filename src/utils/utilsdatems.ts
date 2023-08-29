const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function utilsdatems(month: string, day: string, year: string) {
  const date = new Date(
    Number(year),
    months.findIndex((el) => el === month),
    Number(day),
  );
  return date.getTime();
}
