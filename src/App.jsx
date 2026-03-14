import { useState, useEffect, useCallback } from "react";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionsTable from "./components/TransactionsTable/TransactionsTable";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Modal from "./components/Modal/Modal";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState("salary");
  const [amount, setAmount] = useState({ balance: 0, income: 0, expense: 0 });

  useEffect(() => {
    const transactions = localStorage.getItem("transactions");
    if (transactions) {
      setTransactions(JSON.parse(transactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));

    let balance = 0,
      income = 0,
      expense = 0;

    transactions.forEach((transaction) => {
      balance += transaction.amount;
      transaction.amount > 0
        ? (income += transaction.amount)
        : (expense += transaction.amount);
    });
    setAmount({ balance, income, expense });
  }, [transactions]);

  const addTransaction = useCallback((transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  }, []);

  const removeTransaction = useCallback((id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const openModal = useCallback((category) => {
    setModalCategory(category ?? "salary");
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <Header />
      <main className="main">
        <div className="container full">
          <Summary amount={amount} onTrack={openModal} />
          <TransactionsTable
            items={transactions}
            onDelete={removeTransaction}
          />
        </div>
      </main>

      {modalOpen && (
        <Modal onClose={closeModal}>
          <TransactionForm
            onAdd={addTransaction}
            defaultCategory={modalCategory}
            onClose={closeModal}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
