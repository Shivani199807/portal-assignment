/**
 * Filters data on  specified date range.
 *
 * @param {Array} dataArray - Data to filter.
 * @param {Object} dateState - Date range for filtering.
 * @returns {Array} - A filtered transactions within the specified date range.
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
