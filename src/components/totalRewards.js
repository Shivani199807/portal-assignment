import Table from "./table";
import Heading from "./heading";
import PropTypes from "prop-types";
import { lastThreeMonthsRewardPoints } from "../Utils/totalRewardsPoints";
import { totalRewardsColumns } from "../Utils/columnsconfig";

const TotalRewardsPoints = ({ transactions }) => {
  const totalRewardsPoints = lastThreeMonthsRewardPoints(transactions);
  return (
    <div>
      <Heading text={"Total Rewards"} />
      <Table
        column={totalRewardsColumns}
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
