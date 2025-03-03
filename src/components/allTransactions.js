import Heading from "./heading";
import Table from "./table";
import PropTypes from "prop-types";
import transactions from "../Utils/transactions";
import sortData from "../Utils/sortData";

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

const AllTransactions = ({ totalTransactions }) => {
  const transactionsData = transactions(totalTransactions || []);
  return (
    <div>
      <Heading text={"All Transactions"} />
      <Table
        column={columns}
        rows={sortData(transactionsData, "date", "MM/DD/YY")}
        dataTestId={"allTransactions"}
      />
    </div>
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
