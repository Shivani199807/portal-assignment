import rewardPoints from "./rewardPoints";

/**
 * Formats a price value to ensure two decimal places.
 *
 * @param {number} price - The price value to format.
 * @returns {string} The formatted price as a string with two decimal places.
 */
const formatPrice = (price) => {
  return price % 1 === 0 ? `${price.toFixed(2)}` : price?.toFixed(2);
};

/**
 * Processes transaction data by adding reward points and formatting prices.
 *
 * @param {Array} data - An array of transaction objects.
 * @param {string} data[].transactionId - Unique identifier for the transaction.
 * @param {number} data[].price - Price of the transaction.
 * @param {string} data[].customerId -ID of the customer who made the transaction.
 * @param {string} data[].customerName - Name of the customer.
 *
 * @returns {Array} An array of transactions data:
 
 */
const transactions = (data) => {
  const transactionsResult =
    data &&
    data.map((item) => ({
      ...item,
      rewardPoints: rewardPoints(item),
      id: item.transactionId,
      price: `$${formatPrice(item.price)}`,
    }));
  return transactionsResult;
};

export default transactions;
