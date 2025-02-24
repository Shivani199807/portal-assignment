import Heading from "./heading";
import Table from "./table";
import PropTypes from "prop-types";
export const columns = [
    'Transaction ID',
    'Customer Name',
    'Purchase Date',
    'Product Purchased',
    'Price',
    'Reward Points',
]

const AllTransactions = ({ transactions }) => {

    return (
        <>
            <Heading text={"All Transactions"} />

            <Table columns={columns} data={transactions} excludeKeys={['customerId']} />

        </>
    )
}
AllTransactions.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            transactionId: PropTypes.number.isRequired,
            customerName: PropTypes.string.isRequired,
            purchaseDate: PropTypes.string.isRequired,
            productPurchased: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rewardPoints: PropTypes.number.isRequired
        })
    ).isRequired
};
export default AllTransactions;