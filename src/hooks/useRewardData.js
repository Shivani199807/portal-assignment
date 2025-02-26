import { fetchRewardData } from "../ApiService/fetchReward";
import { useEffect, useState } from "react";

import logger from "../Utils/logger";
import dayjs from "dayjs";
import { filterData } from "../Utils/filterDate";

/**
 * Custom Hook
 *
 * This hook fetches reward transaction data, filters it based on a date range,
 * and manages loading, error, and state handling.
 *
 * @returns {Object} Hook state and functions.
 * @property {Array} result - The filtered transaction data.
 * @property {boolean} loading - Indicates whether data is being fetched.
 * @property {string | null} error - Error message if an error occurs, otherwise `null`.
 * @property {Object} dateFilter - The selected date range for filtering data.
 * @property {string} dateFilter.toDate - The ending date for filtering transactions.
 * @property {string} dateFilter.fromDate - The starting date for filtering transactions.
 * @property {Function} setDateFilter - Function to update the date filter state.
 * @property {Function} fetchData - Function to manually trigger data fetching.
 */

const useRewardData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]);
  const [dateFilter, setDateFilter] = useState({
    toDate: dayjs(new Date()).format("MM-DD-YYYY"),

    fromDate: dayjs(new Date()).subtract(90, "days").format("MM-DD-YYYY"),
  });

  /**
   * Fetches reward data from an api, filters it by date range,
   * and updates state accordingly. Initially filtered based on last three month
   * Handles errors and logs them if fetching fails.
   * Using logger for getting the errors
   */

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const output = await fetchRewardData("./data/rewardsData.json");
      if (!output || output.length === 0) {
        throw new Error("No transaction data available");
      }
      const filterDat = filterData(output, dateFilter);

      setResult(filterDat);
    } catch (err) {
      logger.error(`Error  ${err.message}`);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { result, loading, error, dateFilter, setDateFilter, fetchData };
};
export default useRewardData;
