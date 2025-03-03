import Table from "./table";
import Heading from "./heading";
import PropTypes from "prop-types";
import { lastThreeMonthsRewardPoints } from "../Utils/totalRewardsPoints";

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

const TotalRewardsPoints = ({ transactions }) => {
  const totalRewardsPoints = lastThreeMonthsRewardPoints(transactions);
  return (
    <div>
      <Heading text={"Total Rewards"} />
      <Table
        column={columns}
        rows={totalRewardsPoints}
        dataTestId={"totalRewardPoints"}
      />
    </div>
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
