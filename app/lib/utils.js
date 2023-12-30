export function getTotal(data) {
  return function (arg) {
    data = data.filter((item) => item.mode == arg);
    return data.reduce((total, item) => total + item.cost, 0);
  };
}

export const numFormater = (number, type = false) => {
  if (typeof number !== "number") {
    number = Number(number);
  }
  if (Math.abs(number) >= 1000000000) {
    return type == true
      ? (number / 1000000000).toFixed(2).toString() + "B"
      : (number / 1000000000).toString() + "B";
  } else if (Math.abs(number) > 1000000) {
    return type
      ? (number / 1000000).toFixed(2).toString() + "M"
      : (number / 1000000).toString() + "M";
  } else if (Math.abs(number) >= 1000) {
    return type == true
      ? (number / 1000).toFixed(2).toString() + "K"
      : (number / 1000).toString() + "K";
  } else {
    return Number(number.toFixed(2));
  }
};

export const currency = (value) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const normilized = (val, dec = 2) => Number(val.toFixed(dec));
