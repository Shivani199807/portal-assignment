import Heading from "./heading";
import Table from "./table";
import PropTypes from "prop-types";
import transactions from "../Utils/transactions";

/**
 * Defines the column structure for the Table component.
 * @constant
 * @type {Array<{ field: string, headerName: string, headerClassName: string, flex: number, align?: string }>}
 */
export const columns = [
  {
    field: "transactionId",
    headerName: "Transaction ID",
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
    field: "purchaseDate",
    headerName: "Purchase Date",
    headerClassName: "tableHeader",
    flex: 1,
   
   
  },

  {
    field: "productPurchased",
    headerName: "Product Purchased",
    headerClassName: "tableHeader",
    flex: 1,
   
  },
  {
    field: "price",
    headerName: "Price",
    headerClassName: "tableHeader",
    flex: 1,
    align: "right",
  },
  {
    field: "rewardPoints",
    headerName: "Reward Points",
    headerClassName: "tableHeader",
    flex: 1,
    align: "right",
  },
];

/**
 * Displays a table containing all customer transactions.
 * The data is processed using the `transactions` utility function before rendering.
 *
 * @component
 * @param {Object} props - React component props.
 * @param {Array<{ transactionId: number, customerName: string, purchaseDate: string, productPurchased: string, price: number, rewardPoints: number }>} props.totalTransactions - Array of all customer transactions.
 * @returns {JSX.Element} The rendered AllTransactions component.
 */

const AllTransactions = ({ totalTransactions }) => {
  const transactionsData = transactions(totalTransactions || []);
  return (
    <>
      <Heading text={"All Transactions"} />

      <Table
        column={columns}
        rows={transactionsData}
        dataTestId={"allTransactions"}
       
      />
    </>
  );
};
AllTransactions.propTypes = {
  totalTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      transactionId: PropTypes.number.isRequired,
      customerName: PropTypes.string.isRequired,
      purchaseDate: PropTypes.string.isRequired,
      productPurchased: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rewardPoints: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default AllTransactions;
