import React from "react";
import "./Summary.css";

function Summary({ amount, onTrack }) {
  return (
    <>
      <div className="balance">
        <h2>Balance</h2>
        <div className={`value ${amount.balance >= 0 ? "pos" : "neg"}`}>
          $ {amount.balance.toFixed(2)}
        </div>
      </div>
      <div className="container">
        <div className="summary">
          <div className="sum-item">
            <h3>Income</h3>
            <p className="income">${amount.income.toFixed(2)}</p>
          </div>
          <div className="sum-item">
            <h3>Expense</h3>
            <p className="expense">${Math.abs(amount.expense).toFixed(2)}</p>
          </div>
        </div>

        <div className="track-row">
          <button className="track-btn" onClick={() => onTrack()}>
            Track Finance
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(Summary);
