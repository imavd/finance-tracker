import { useState } from "react";
import { format, parseISO } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import "./TransactionForm.css";

const CATEGORIES = ["salary", "food", "gas", "bills", "rent"];

function TransactionForm({ onAdd, defaultCategory = "salary", onClose }) {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: defaultCategory,
    date: format(new Date(), "yyyy-MM-dd"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isIncome = form.category === "salary";
    const amountNum = Number(form.amount);

    onAdd({
      id: uuidv4(),
      description: form.description,
      category: form.category,
      amount: isIncome ? amountNum : -amountNum,
      date: format(parseISO(form.date), "yyyy-MM-dd"),
    });
    setForm({
      description: "",
      amount: "",
      category: defaultCategory,
      date: format(new Date(), "yyyy-MM-dd"),
    });
    onClose();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select
        id="category"
        value={form.category}
        onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
      >
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        placeholder="Description (optional)"
        value={form.description}
        onChange={(e) =>
          setForm((p) => ({ ...p, description: e.target.value }))
        }
      />
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm((p) => ({ ...p, amount: e.target.value }))}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;
