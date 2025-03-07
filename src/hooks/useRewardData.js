import { fetchRewardData } from "../ApiService/fetchReward";
import { useEffect, useState } from "react";
import logger from "../Utils/logger";
import dayjs from "dayjs";
import { filterData } from "../Utils/filterDate";

/** 
 * Hook to return data  
 * @returns {Object} -Returns an object that contains result,loading,error,dateFilter,setDateFilter and fetchData.
 * @property {Array} result - filtered transaction data.
 * @property {boolean} loading - shows loading state.
 * @property {string | null} errorMessage - Error message 
 * @property {Object} dateFilter - The selected date range for filtering data.
 * @property {Function} setDateFilter - Setstate to update the date filter state.
 * @property {Function} fetchData - Function that fetches data and set it.
 */

const useRewardData = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [result, setResult] = useState([]);
  const [dateFilter, setDateFilter] = useState({
    toDate: dayjs(new Date()).format("MM-DD-YYYY"),
    fromDate: dayjs(new Date()).subtract(90, "days").format("MM-DD-YYYY"),
  });

  const fetchData = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const output = await fetchRewardData("./data/rewardsData.json");
      if (!output || output.length === 0) {
        throw new Error("No transaction data available");
      }
      const filterDat = filterData(output, dateFilter);

      setResult(filterDat);
    } catch (err) {
      logger.error(`Error  ${err.message}`);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { result, loading, errorMessage, dateFilter, setDateFilter, fetchData };
};
export default useRewardData;
