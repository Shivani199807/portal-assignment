import rewardPoints from "./rewardPoints";
import dayjs from "dayjs";
import _ from "lodash"; // ✅ Import lodash for deep cloning

/**
 * Formats a price value to ensure two decimal places.
 *
 * @param {number} price - The price value to format.
 * @returns {string} The formatted price as a string with two decimal places.
 */
const formatPrice = (price) => {
    if (typeof price !== "number" || isNaN(price)) return 0.00;
  return price % 1 === 0 ? `${price.toFixed(2)}` : price?.toFixed(2);
};

/**
 * Processes transaction data by adding reward points and formatting prices.
 * Also sorts transactions by `purchaseDate` in descending order.
 *
 * @param {Array} data - An array of transaction objects.
 * @param {string} data[].transactionId - Unique identifier for the transaction.
 * @param {number} data[].price - Price of the transaction.
 * @param {string} data[].customerId - ID of the customer who made the transaction.
 * @param {string} data[].customerName - Name of the customer.
 * @param {string} data[].purchaseDate - Date of the transaction in "MM/DD/YY" format.
 *
 * @returns {Array} An array of sorted transaction data.
 */
const transactions = (data) => {
  if (!Array.isArray(data)) return [];

  //  Deep clone the data to avoid mutating the original array
  const clonedData = _.cloneDeep(data);

  //  Sort by `purchaseDate` in descending order
  clonedData.sort((a, b) => {
    const dateA = dayjs(a.purchaseDate, "MM/DD/YY").valueOf();
    const dateB = dayjs(b.purchaseDate, "MM/DD/YY").valueOf();
    return dateB - dateA; 
  });

  // ✅ Process transactions
  return clonedData.map((item) => ({
    ...item,
    rewardPoints: rewardPoints(item),
    id: item.transactionId,
    price: `$${formatPrice(item.price)}`,
  }));
};

export default transactions;
