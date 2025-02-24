import { fetchRewardData } from "../ApiService/fetchReward"
import { useEffect, useState } from "react";
import transactions from "../Utils/transactions";
import { monthlyRewardPoints } from "../Utils/monthlyRewardPoints";
import { lastThreeMonthsRewardPoints } from "../Utils/totalRewardsPoints";
import logger from "../Utils/logger";
const useRewardData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState({
        transactions: [],
        monthlyRewards: [],
        totalConsecutiveRewards: []
    })
    const fetchData = async () => {
        setLoading(true);
        setError(null)
        try {

            const output = await fetchRewardData('./data/rewardsData.json');
            if (!output || output.length === 0) {
                throw new Error('No transaction data available');
            }

            const transactionsData = transactions(output);
            const monthlyRewards = monthlyRewardPoints(transactionsData);
            const totalRewardPoints = lastThreeMonthsRewardPoints(monthlyRewards);
            setResult({

                transactions: transactionsData,
                monthlyRewards: monthlyRewards,
                totalConsecutiveRewards: totalRewardPoints
            })


        } catch (err) {
            logger.error(`Error  ${err.message}`);
            setError(err.message)

        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {

        fetchData()
    }, [])


    return { ...result, loading, error }
}
export default useRewardData;