import Table from "./table";
import Heading from "./heading";
import PropTypes from "prop-types";
export const columns=[
    'Customer ID',
    'Name',
    'Month',
    'Year',
    'Reward Points',
]
const MonthlyRewardPoints = ({ transactions }) => {
    return (
       <>
       <Heading text={"Monthly Transactions"}/>
       <Table  columns={columns} data={transactions}/>
           </>
    )
}
MonthlyRewardPoints.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            customerId: PropTypes.number,
            customerName: PropTypes.string,
            month: PropTypes.string,
            year: PropTypes.string,
            totalRewardPoints: PropTypes.number
        })
    ).isRequired
};

export default MonthlyRewardPoints ;