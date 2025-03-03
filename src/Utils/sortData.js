import dayjs from "dayjs";
import _ from "lodash";

const sortData = (transactions, sortType, dateType = "") => {
  const clonedData = _.cloneDeep(transactions);
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
