import { fetchRewardData } from "../ApiService/fetchReward"
import React, { useEffect, useState } from "react";
import transactions from "../Utils/transactions";
import { monthlyRewardPoints } from "../Utils/monthlyRewardPoints";
import { lastThreeMonthsRewardPoints } from "../Utils/totalRewardsPoints";
import logger from "../Utils/logger";
const useRewardData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [result, setResult] = useState({
        transactions: [],
        monthlyRewards: [],
        totalConsecutiveRewards: []
    })
    const fetchData = async () => {
        setLoading(true);

        try {

            const output = await fetchRewardData('./data/rewardsData.json');

            if (output.length === 0) {
                return `<div>No Data Found</div>`
            } else {

                const transactionsData = transactions(output);
                const monthlyRewards = monthlyRewardPoints(transactionsData);
                const totalRewardPoints = lastThreeMonthsRewardPoints(monthlyRewards);
                setResult({

                    transactions: transactionsData,
                    monthlyRewards: monthlyRewards,
                    totalConsecutiveRewards: totalRewardPoints
                })
            }

        } catch (err) {
            logger.error(`Error  ${error.message}`);
            setError(err)

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