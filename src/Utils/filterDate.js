/**
 * Filters an array of data based on a specified date range.
 *
 * @param {Array} dataArray - The array of transaction data to be filtered.
 * @param {Object} dateState - The date range for filtering.
 * @param {string} dateState.fromDate - The starting date of the filter range (MM-DD-YYYY or similar format).
 * @param {string} dateState.toDate - The ending date of the filter range (MM-DD-YYYY or similar format).
 * @returns {Array} - A filtered array containing only transactions within the specified date range.
 */

export const filterData = (dataArray, dateState) => {
  if (!dataArray || dataArray.length === 0) return [];

  const startDate = new Date(dateState.fromDate);
  const endDate = new Date(dateState.toDate);

  return dataArray.filter((data) => {
    const date = new Date(data.purchaseDate);
    return date >= startDate && date <= endDate;
  });
};
