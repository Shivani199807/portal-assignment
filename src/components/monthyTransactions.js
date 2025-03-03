import Table from "./table";
import Heading from "./heading";
import PropTypes from "prop-types";
import {
  monthlyRewardPoints,
  splitByMonths,
} from "../Utils/monthlyRewardPoints";
import { monthlyTransactionsColumns } from "../Utils/columnsconfig";

const MonthlyRewardPoints = ({ monthlyTransactions }) => {
  const monthlyRewardPoint = monthlyRewardPoints(monthlyTransactions, true);
  const splitByMonth = splitByMonths(monthlyRewardPoint);

  return (
    <div>
      <Heading text={"Monthly Transactions"} />
      {Object.keys(splitByMonth).map((monthKey) => (
        <div key={monthKey}>
          <h3>{`Transactions for ${monthKey}`}</h3>
          <Table
            column={monthlyTransactionsColumns}
            rows={splitByMonth[monthKey]}
            dataTestId={"monthlyTransaction"}
          />
        </div>
      ))}
    </div>
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
