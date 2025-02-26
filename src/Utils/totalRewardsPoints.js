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

  const allCustomers = monthlyRewardsPoint.reduce(
    (acc, { customerId, customerName }) => {
      if (!acc[customerId]) {
        acc[customerId] = { customerId, customerName, totalRewardPoints: 0 }; // Default to 0
      }
      return acc;
    },
    {}
  );

  // Aggregate reward points for each customer
  const rewardsData = monthlyRewardsPoint.reduce(
    (acc, { customerId, totalRewardPoints }) => {
      const key = `${customerId}`;

      if (!acc[key]) {
        acc[key] = { ...allCustomers[key], id: customerId }; // Ensure customer exists
      }

      acc[key].totalRewardPoints += totalRewardPoints;
      acc[key].id = customerId;

      return acc;
    },
    { ...allCustomers }
  ); // Initialize with all customers

  return Object.values(rewardsData);
};
