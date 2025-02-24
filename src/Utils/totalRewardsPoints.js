export const lastThreeMonthsRewardPoints = (monthlyRewards) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 

    // Define last 3 consecutive months 
    const lastThreeMonthsSet = new Set([
        `${currentYear}-${currentMonth}`,
        `${currentMonth - 1 <= 0 ? currentYear - 1 : currentYear}-${(currentMonth - 1 + 12) % 12 || 12}`,
        `${currentMonth - 2 <= 0 ? currentYear - 1 : currentYear}-${(currentMonth - 2 + 12) % 12 || 12}`,
    ]);

  //Extract all unique customers
    const allCustomers = monthlyRewards.reduce((acc, { customerId, customerName }) => {
        if (!acc[customerId]) {
            acc[customerId] = { customerId, customerName, totalRewardPoints: 0 }; // Default to 0
        }
        return acc;
    }, {});

    // Calculate reward points for last 3 months
    const rewardsData = monthlyRewards.reduce((acc, { customerId, year, month, totalRewardPoints }) => {
        const key = `${customerId}`;
        const monthKey = `${year}-${month}`;

        if (!lastThreeMonthsSet.has(monthKey)) return acc; //if not in last 3 months

        if (!acc[key]) {
            acc[key] = { ...allCustomers[key] }; // Ensure customer exists
        }

        acc[key].totalRewardPoints += totalRewardPoints;

        return acc;
    }, { ...allCustomers }); // Initialize with all customers

    return Object.values(rewardsData);
};
