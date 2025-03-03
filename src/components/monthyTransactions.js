import Table from "./table";
import Heading from "./heading";
import PropTypes from "prop-types";
import {
  monthlyRewardPoints,
  splitByMonths,
} from "../Utils/monthlyRewardPoints";

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
