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
  if (number >= 1000000000) {
    return type == true
      ? (number / 1000000000).toFixed(2).toString() + "B"
      : (number / 1000000000).toString() + "B";
  } else if (number > 1000000) {
    return type == true
      ? (number / 1000000).toFixed(2).toString() + "M"
      : (number / 1000000).toString() + "M";
  } else if (number > 1000) {
    return type == true
      ? (number / 1000).toFixed(2).toString() + "K"
      : (number / 1000).toString() + "K";
  } else {
    return number.toString();
  }
};

export const currency = (value) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
