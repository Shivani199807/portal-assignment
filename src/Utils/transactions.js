import rewardPoints from "./rewardPoints";

/**
 * Formats a price value to ensure two decimal places.
 * @param {number} price - The price value to format.
 * @returns {string|number} The formatted price as a string with two decimal places.
 */
const formatPrice = (price) => {
  if (typeof price !== "number" || isNaN(price)) return "0.00";
  return price.toFixed(2);
};

/**
 * Processes transaction data by adding reward points and formatting prices.
 *
 * @param {Array} data - An array of transaction objects .
 * @returns {Array} An array of sorted transaction data.
 */
const transactions = (data) => {
  if (!Array.isArray(data)) return [];
  const transactionData = data.map((item) => ({
    ...item,
    rewardPoints: rewardPoints(item?.price),
    id: item.transactionId,
    price: formatPrice(item.price),
  }));
  return transactionData;
};

export default transactions;
