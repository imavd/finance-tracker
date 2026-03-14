import TransactionRow from "../TransactionRow/TransactionRow";
import "./TransactionsTable.css";

function TransactionsTable({ items = [], onDelete }) {
  if (items.length === 0) {
    return <p className="main">No transactions yet</p>;
  }

  return (
      <table id="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
            <th style={{ textAlign: "right" }}>Amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map((tx) => (
            <TransactionRow key={tx.id} tx={tx} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
  );
}

export default TransactionsTable;
