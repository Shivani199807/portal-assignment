/**
 * Calculates the reward points based on the purchase price.
 *
 * - Customers earn:
 *   - 2 points for every dollar spent over $100.
 *   - 1 point for every dollar spent between $50 and $100.
 *   - No points for amounts $50 or below.
 *
 * @param {Object} data - The transaction data.
 * @param {number} data.price - The purchase price.
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
