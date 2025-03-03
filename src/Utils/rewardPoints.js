/**
 * Calculates the reward points based on the purchase price.
 * @param {Object} data - The transaction data.
 * @returns {number} The total reward points earned.
 */

const rewardPoints = (data) => {
  if (typeof data?.price !== "number" || isNaN(data?.price)) return 0;
  const roundedPrice = Math.floor(data?.price);
  if (roundedPrice > 100) {
    return 2 * (roundedPrice - 100) + 50;
  }
  return roundedPrice > 50 ? roundedPrice - 50 : 0;
};

export default rewardPoints;
