const moneyFormat = (price) => {
  let a = Number(price);
  let b = a.toLocaleString("zh-TW", { style: "currency", currency: "TWD" });
  let c = b.split(".");
  return c[0];
};

export { moneyFormat };
