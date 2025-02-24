import sortData from "./sortData";

export const monthlyRewardPoints = (transactions) => {

    const data = transactions && Object.values(
        transactions.reduce((acc, { customerId, customerName, purchaseDate, rewardPoints }) => {
            const [year, month] = purchaseDate.split("-").slice(0, 2);
            const key = `${customerId}-${year}-${month}`;
            if (!acc[key]) {
                acc[key] = {
                    customerId,
                    customerName,
                    year,
                    month,
                    totalRewardPoints: 0
                };
            }
            acc[key].totalRewardPoints = acc[key].totalRewardPoints + rewardPoints;


            return acc
        }, {})


    )
    data.sort((a,b)=>{
        if(a.customerId!==b.customerId) return a.customerId-b.customerId;
        
    })
    return sortData(data);
}