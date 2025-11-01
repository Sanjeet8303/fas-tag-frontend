import DataTable from './Table';
import React from 'react'

export default function Wallet() {
  const viewportWidth = window.innerWidth;
  console.log("Viewport width:", viewportWidth);
  return (
    <div>

      <div className="recharge-container">
        <div className="recharge-card">
          <div className="recharge-header">
            <h2>
              <i className="fas fa-undo-alt"></i> Wallet History
            </h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Fastag-logo.png"
              alt="Bharat Connect"
              className="brand-logo"
            />
          </div>

          <div className="filters">
            <div className="filter-item">
              <label>From Date</label>
              <input type="date" />
            </div>

            <div className="filter-item">
              <label>To Date</label>
              <input type="date" />
            </div>

            <button className="search-btn">
              <i className="fas fa-search"></i> Search
            </button>
          </div>
          {viewportWidth >= 700 ? <table className="recharge-table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>TxnID</th>
                <th>Customer Name</th>
                <th>Amount</th>
                <th>Discount</th>
                <th>Vehicle No</th>
                <th>Created At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="8" className="no-records">
                  No records found
                </td>
              </tr>
            </tbody>
          </table>
            : ""}

        </div>
      </div>
      {viewportWidth < 700 ? <DataTable /> : ""}
    </div>

  )
}

