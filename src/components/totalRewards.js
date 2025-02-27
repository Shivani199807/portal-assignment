import Table from "./table";
import Heading from "./heading";
import PropTypes from "prop-types";
import { lastThreeMonthsRewardPoints } from "../Utils/totalRewardsPoints";
/**
 * Columns configuration for the Table component.
 * @constant
 * @type {Array<{ field: string, headerName: string, headerClassName: string, flex: number, align?: string }>}
 */
const columns = [
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
    headerName: "Total Reward Points",
    headerClassName: "tableHeader",
    flex: 1,
    align: "right",
  },
];

/**
 * Renders a table displaying the total reward points of customers .
 *
 * @component
 * @param {Object} props - React component props.
 * @param {Array<{ customerId: number, customerName: string, totalRewardPoints: number }>} props.transactions - Array of customer transactions.
 * @returns {JSX.Element} The rendered TotalRewardsPoints component.
 */
const TotalRewardsPoints = ({ transactions }) => {
  const totalRewardsPoints = lastThreeMonthsRewardPoints(transactions);

  return (
    <>
      <Heading text={"Total Rewards"} />
      <Table
        column={columns}
        rows={totalRewardsPoints}
        dataTestId={"totalRewardPoints"}
      />
    </>
  );
};
TotalRewardsPoints.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.number,
      customerName: PropTypes.string.isRequired,
      totalRewardPoints: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default TotalRewardsPoints;
