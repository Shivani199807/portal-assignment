import { monthlyRewardPoints } from "./monthlyRewardPoints";
/**
 * Calculates the total reward points for each customer .
 * @param {Array} monthlyRewards - An array of transaction data .
 * @returns {Array} An array of objects containing customerId,customerName,totalRewardPoints,id
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
        };
      }
      acc[customerId].totalRewardPoints += totalRewardPoints;
      return acc;
    },
    {}
  );

  return Object.values(rewardsData);
};
