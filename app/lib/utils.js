export function getTotal(data) {
  return function (arg) {
    data = data.filter((item) => item.mode == arg);
    return data.reduce((total, item) => total + item.cost, 0);
  };
}
