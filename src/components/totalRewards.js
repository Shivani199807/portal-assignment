import Table from "./table";
import Heading from "./heading";
import PropTypes from "prop-types";
export const columns = [
    'Customer Name',
    'Total Reward Points',
]
const TotalRewardsPoints = ({ transactions }) => {
    return (
        <>
            <Heading text={"Total Rewards(Last Three Consecutive Months)"} />
            <Table columns={columns} data={transactions} excludeKeys={['customerId']} />
        </>
    )
}
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