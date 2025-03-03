import dayjs from "dayjs";
import _ from "lodash";
/**
 * 
 * @param {Array} transactions 
 * @param {String} sortType - this defines the type whether date or id
 * @param {String} fieldName -this defines on what basis we have to sort basically the parameters
 * @param {String} dateType  - date type mainly dd/mm/yy or mmmm-yyyy
 * @returns {Array} -sorted data
 */
const sortData = (transactions, sortType, fieldName="",dateType = "") => {
  const clonedData = _.cloneDeep(transactions);
  if (sortType === "date") {
    return clonedData.sort((a, b) => {
      const dateA = dayjs(fieldName?a[fieldName]:a[0], dateType).valueOf();
      const dateB = dayjs(fieldName?b[fieldName]:b[0], dateType).valueOf();
      return dateB - dateA;
    });
  } else if (sortType === "id") {
    return clonedData.sort((a, b) =>
      String(a[fieldName]).localeCompare(b[fieldName])
    );
  }
};

export default sortData;
