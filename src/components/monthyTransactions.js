import Table from "./table";
import Heading from "./heading";
import PropTypes from "prop-types";
import {
  monthlyRewardPoints,
  splitByMonths,
} from "../Utils/monthlyRewardPoints";

/**
 * Defines the column structure for the Table component.
 * @constant
 * @type {Array<{ field: string, headerName: string, headerClassName: string, flex: number, align?: string }>}
 */
export const columns = [
  {
    field: "customerId",
    headerName: "Customer Id",
    headerClassName: "tableHeader",
    flex: 1,
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    headerClassName: "tableHeader",
    flex: 1,
  },

  {
    field: "totalRewardPoints",
    headerName: "Reward Points",
    headerClassName: "tableHeader",
    flex: 1,
    align: "right",
  },
];
/**
 * Renders a table displaying the monthly reward points for customers.
 * The data is first processed to group transactions by months and then displayed.
 *
 * @component
 * @param {Object} props - React component props.
 * @param {Array<{ customerId: number, customerName: string, month: string, year: string, totalRewardPoints: number }>} props.monthlyTransactions - Array of monthly customer transactions.
 * @returns {JSX.Element} The rendered MonthlyRewardPoints component.
 */
const MonthlyRewardPoints = ({ monthlyTransactions }) => {
  const monthlyRewardPoint = monthlyRewardPoints(monthlyTransactions, true);
  const splitByMonth = splitByMonths(monthlyRewardPoint);

  return (
    <>
      <Heading text={"Monthly Transactions"} />
      {Object.keys(splitByMonth).map((monthKey) => (
        <div key={monthKey}>
          <h3>{`Transactions for ${monthKey}`}</h3>
          <Table
            column={columns}
            rows={splitByMonth[monthKey]}
            dataTestId={"monthlyTransaction"}
          />
        </div>
      ))}
    </>
  );
};
MonthlyRewardPoints.propTypes = {
  monthlyTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.number,
      customerName: PropTypes.string,
      month: PropTypes.string,
      year: PropTypes.string,
      totalRewardPoints: PropTypes.number,
    })
  ).isRequired,
};

export default MonthlyRewardPoints;
