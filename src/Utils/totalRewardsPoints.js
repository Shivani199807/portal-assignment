import { monthlyRewardPoints } from "./monthlyRewardPoints";
/**
 * Calculates the total reward points for each customer over the last three months.
 *
 * @param {Array} monthlyRewards - An array of transaction data for the last three months.
 * @param {string} monthlyRewards[].customerId - The unique identifier for the customer.
 * @param {string} monthlyRewards[].customerName - The name of the customer.
 * @param {number} monthlyRewards[].totalRewardPoints - The reward points earned by the customer in a given month.
 *
 * @returns {Array} An array of objects containing customerId,customerName,totalRewardPoints,id
 *
 */

export const lastThreeMonthsRewardPoints = (monthlyRewards) => {
  const monthlyRewardsPoint = monthlyRewardPoints(monthlyRewards);

  // Aggregate reward points for each customer
  const rewardsData = monthlyRewardsPoint.reduce(
    (acc, { customerId, customerName, totalRewardPoints }) => {
      if (!acc[customerId]) {
        acc[customerId] = {
          id: customerId,
          customerId,
          customerName,
          totalRewardPoints: 0,
        }; // Ensure customer exists
      }

      acc[customerId].totalRewardPoints += totalRewardPoints;

      return acc;
    },
    {}
  );

  return Object.values(rewardsData);
};
