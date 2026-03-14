import { FiTrash2 } from "react-icons/fi";

function TransactionRow({ tx, onDelete }) {
  const { id, category = "", description = "", date = "", amount } = tx;
  const rowClass = amount >= 0 ? "pos" : "neg";

  return (
    <tr className={rowClass}>
      <td className="category-cell">{category}</td>
      <td>{description}</td>
      <td>{date}</td>
      <td className="amount" style={{ textAlign: "right" }}>
        {`$ ${amount.toFixed(2)}`}
      </td>
      <td className="remove">
        <button className="delete" onClick={() => onDelete(id)}>
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
}

export default TransactionRow;
