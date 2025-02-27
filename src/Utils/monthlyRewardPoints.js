import transactions from "./transactions";
import dayjs from "dayjs";

import _ from "lodash"; 
/**
 * Calculates the total reward points earned by each customer per month.
 *
 * @param {Array} monthlyTransactions - An array of transaction objects.
 * @param {number} monthlyTransactions[].customerId - The unique ID of the customer.
 * @param {string} monthlyTransactions[].customerName - The name of the customer.
 * @param {string} monthlyTransactions[].purchaseDate - The purchase date in MM/DD/YY format.
 * @param {number} monthlyTransactions[].rewardPoints - The reward points earned for the transaction.
 * @param {number} monthlyTransactions[].id - The transaction ID.
 *
 * @returns {Array} - An array where each object represents a customer's total reward points per month.
 */
export const monthlyRewardPoints = (monthlyTransactions) => {
  const calculatedRewardPoints = transactions(monthlyTransactions);
  const data =
    calculatedRewardPoints &&
    calculatedRewardPoints.reduce(
      (acc, { customerId, customerName, purchaseDate, rewardPoints, id }) => {
        const formattedDate = dayjs(purchaseDate, "MM/DD/YY");

        const year = parseInt(formattedDate.format("YYYY"), 10);
        const month = parseInt(formattedDate.format("M"), 10);
        const key = `${customerId}-${year}-${month}`;
        if (!acc[key]) {
          acc[key] = {
            customerId,
            customerName,
            year,
            month,
            totalRewardPoints: 0,
            id: id,
          };
        }
        acc[key].totalRewardPoints = acc[key].totalRewardPoints + rewardPoints;

        return acc;
      },
      {}
    );

  return Object.values(data || []);
};

/**
 * This function split the montly reward points data in terms of month and year
 * @param {Array} data1  // It contains total sum of total reward points of each customer
 *
 * @returns {Array} data It contains the monthly reward points of each customer split on basis of each month and year
 */



export const splitByMonths = (data1) => {
  if (!Array.isArray(data1)) return {};

  //  Deep clone to prevent modifying the original array
  const clonedData = _.cloneDeep(data1);

  const data = {};

  for (const { customerId, customerName, month, year, totalRewardPoints, id } of clonedData) {
    const key = `${dayjs().month(month - 1).format("MMMM")}-${year}`;

    if (!data[key]) data[key] = [];

    data[key].push({
      customerId,
      customerName,
      month,
      year,
      totalRewardPoints,
      id,
    });
  }

  return Object.fromEntries(
    Object.entries(data)
      // Sort months in descending order 
      .sort(
        ([aKey], [bKey]) =>
          dayjs(bKey, "MMMM-YYYY").valueOf() - dayjs(aKey, "MMMM-YYYY").valueOf()
      )
      .map(([monthKey, transactions]) => [
        monthKey,
        // Sort by `customerId` (Ascending Order) within each month
        transactions.sort((a, b) => String(a.customerId).localeCompare(b.customerId)),
      ])
  );
};

