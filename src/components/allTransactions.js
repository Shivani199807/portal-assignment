import Heading from "./heading";
import Table from "./table";
import PropTypes from "prop-types";
import transactions from "../Utils/transactions";
import sortData from "../Utils/sortData";
import { transactionColumns } from "../Utils/columnsconfig";

const AllTransactions = ({ totalTransactions }) => {
  const transactionsData = transactions(totalTransactions || []);
  return (
    <div>
      <Heading text={"All Transactions"} />
      <Table
        column={transactionColumns}
        rows={sortData(transactionsData, "date","purchaseDate", "MM/DD/YY")}
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
