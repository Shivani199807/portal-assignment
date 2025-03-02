import dayjs from "dayjs";
import _ from "lodash"; // Import lodash for deep cloning

const sortData = (transactions, sortType, dateType = "") => {
  //  Deep clone the data to avoid mutating the original array
  const clonedData = _.cloneDeep(transactions);
  //  Sort by date in descending order
  if (sortType === "date") {
    return clonedData.sort((a, b) => {
      const dateA = dayjs(a.purchaseDate, dateType).valueOf();
      const dateB = dayjs(b.purchaseDate, dateType).valueOf();
      return dateB - dateA;
    });
  } else if (sortType === "id") {
    return transactions.sort((a, b) =>
      String(a.customerId).localeCompare(b.customerId)
    );
  }
};

export default sortData;
