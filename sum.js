const Sum = (...numbers) => {
  return numbers.reduce((pv, cv) => pv + cv, 0);
};

module.exports = Sum;
