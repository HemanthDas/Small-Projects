exports.toDate = () => {
  let today = new Date();
  const option = {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  };
  return today.toLocaleDateString("en-us", option);
};

exports.toDay = () => {
  let today = new Date();
  const option = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-us", option);
};
