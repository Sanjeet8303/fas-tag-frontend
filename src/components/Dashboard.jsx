import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Button from '@mui/material/Button';
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import ListItem from "@mui/material/ListItem";
// import "./Dashboard.css"



export default function Dashboard() {

  const viewportWidth = window.innerWidth;
  console.log("Viewport width:", viewportWidth);

  const banks = [
    { name: "Indian Highways Management", img: "https://ihmcl.co.in/wp-content/uploads/2020/08/IHMCL-Logo.jpeg" },
    { name: "IndusInd Bank", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YC4VoAtmsZVpCRBuFgM__AJILzBwlfazPw&s" },
    { name: "Bank of Baroda", img: "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png" },
    { name: "Axis Bank", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/AXISBank_Logo.svg/1200px-AXISBank_Logo.svg.png" },
    { name: "IDFC FIRST Bank", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_IDFC_First_Bank.svg/2560px-Logo_of_IDFC_First_Bank.svg.png" },
    { name: "HDFC Bank", img: "https://images.seeklogo.com/logo-png/55/2/hdfc-bank-logo-png_seeklogo-556499.png" },
    { name: "Kotak Mahindra Bank", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Kotak_Mahindra_Group_logo.svg/2560px-Kotak_Mahindra_Group_logo.svg.png" },
    { name: "Equitas", img: "https://opengraph.b-cdn.net/production/images/692bebcb-648a-4180-a1a5-5b0a51b2b3f7.jpg?token=wSuDcMXYwC5_7zNjcCM53Stm6MGNM3xuWIxLseuYPZY&height=1000&width=1001&expires=33277599709" },
    { name: "IDBI Bank", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOKEgRftJ5rkWpBj7ykWOTwQ4SvsX11RzTw&s" },
    { name: "IOB", img: "https://images.seeklogo.com/logo-png/42/1/indian-overseas-bank-logo-png_seeklogo-423270.png" },
    { name: "Jammu and Kashmir Bank", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmL4zHRU1fs3CnTc5slqb9NHNQ700HK0JLGA&s" },
    { name: "Karnataka Bank", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLmDmJx04_9WV8fw9n6wxFr1HYKpNVEilLw&s" },
    { name: "Paytm Payments Bank", img: "https://play-lh.googleusercontent.com/F_Oe-ofdpo7Kkoz0OLfVAok8TyljM_vEu-QvAdubvx4__KhJ5rhFDj6esf2dWt7Pxvc" },
    { name: "SBI", img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1280px-State_Bank_of_India_logo.svg.png" },
    { name: "Federal Bank", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Federal-Bank-Logo_SVG.svg/2560px-Federal-Bank-Logo_SVG.svg.png" },
    { name: "ICICI Bank", img: "https://brandeps.com/logo-download/I/ICICI-Bank-logo-01.png" },
    { name: "UCO Bank", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKz_IuAZjXpIMw-GQik0ASwvj6JFuJsPa1Tg&s" },
    { name: "Airtel Payments Bank", img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Airtel_payments_bank_logo.jpg" },
    { name: "Bank of Maharashtra", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bank_of_Maharashtra_logo.svg/1280px-Bank_of_Maharashtra_logo.svg.png" }
  ];

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [showAddMoney, setShowAddMoney] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBank, setSelectedBank] = useState(null);
  const [vehicleNumber, setVehicleNumber] = useState("");

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImgError = (e) => {
    e.target.src = "https://cdn-icons-png.flaticon.com/512/2331/2331941.png";
  };

  return (
    <div>






      {/* Main Content */}
      <main className={`main-content flex-grow-1 p-4 ${viewportWidth < 700 ? "mx-0" : ""}`} >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 bg-info-subtle p-3 rounded-3 shadow-sm">
          {viewportWidth < 700 ? <p className="fw-bold text-dark mb-0" style={{ fontSize: "0.7rem" }}>FASTag Recharge & Get Exciting Offers!</p> :
            <h4 className="fw-bold text-dark mb-0">
              FASTag Recharge & Get Exciting Offers!
            </h4>}


          <div className="wallet-section d-flex align-items-center gap-2">
            <i className="fa-solid fa-wallet fs-5 text-dark"></i>
            <span className="fw-semibold text-dark">₹0.00</span>
            <button
              className="btn btn-primary btn-sm fw-semibold"
              style={{ fontSize: `${viewportWidth < 700 ? "0.6rem" : ""}` }}
              onClick={() => setShowAddMoney(true)}
            >
              Add Money
            </button>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User" className="user-icon" />
          </div>
        </div>

        {/* Add Money Modal */}
        {showAddMoney && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4 rounded-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="m-0 fw-bold">Add Money</h4>
                  <button
                    className="btn-close"
                    onClick={() => setShowAddMoney(false)}
                  ></button>
                </div>

                {/* Preset Amount Buttons */}
                <div className="d-flex justify-content-between mb-3">
                  {[500, 1000, 1500, 2000].map((amt) => (
                    <button
                      key={amt}
                      className="btn border border-success fw-bold"
                      style={{
                        width: "80px",
                        borderRadius: "10px",
                        color: "black",
                      }}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>

                <p className="text-center text-muted fw-semibold">OR</p>

                {/* Enter Amount */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Enter Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter amount"
                  />
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Payment Method
                  </label>
                  <select className="form-select">
                    <option value="">Select Method</option>
                    <option value="upi">UPI</option>
                    <option value="netbanking">Net Banking</option>
                  </select>
                </div>

                {/* Proceed Button */}
                <button
                  className="btn w-100"
                  style={{ backgroundColor: "#004d4d", color: "white" }}
                  onClick={() => setShowAddMoney(false)} //Modal close on click
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        )}


        {!selectedBank ? (
          <>
            {/* Search */}
            <div className="text-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Bharat_Connect_Primary_Logo_SVG.svg/250px-Bharat_Connect_Primary_Logo_SVG.svg.png"
                alt="Bharat Connect"
                width="120"
                className="mb-2"
                onError={handleImgError}
              />
              <h6 className="text-muted">Select your FASTag Provider</h6>
              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  placeholder="Search Providers..."
                  className="form-control w-50 shadow-sm"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            {/* Bank Cards */}
            <div className="row g-3">
              {filteredBanks.map((bank, index) => (
                <div className="col-md-3 col-sm-6" key={index}>
                  <div
                    className="bank-card shadow-sm bg-white p-3 d-flex align-items-center gap-3 rounded-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedBank(bank)}
                  >
                    <img
                      src={bank.img}
                      alt={bank.name}
                      className="bank-logo"
                      onError={handleImgError}
                    />
                    <h6 className="mb-0 text-dark fw-semibold">{bank.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="container py-4">
            <h4 className="fw-bold mb-4">Recharge your FASTag</h4>
            <div className="bg-white border rounded-3 p-3 mb-4 d-flex align-items-center justify-content-between shadow-sm">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={selectedBank.img}
                  alt={selectedBank.name}
                  width="50"
                  height="50"
                  onError={handleImgError}
                />
                <h6 className="fw-semibold mb-0">{selectedBank.name}</h6>
              </div>
              <button
                className="btn btn-link text-danger fw-semibold"
                onClick={() => setSelectedBank(null)}
              >
                <i className="fa-solid fa-pen me-1"></i> Edit
              </button>
            </div>

            <input
              type="text"
              className="form-control p-3 mb-3 shadow-sm"
              placeholder="Vehicle Registration Number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />

            <button className="btn btn-teal px-5 py-2 fw-bold" style={{ background: "#004d4d", color: "#fff" }}>
              NEXT
            </button>

            <div className="text-end mt-4">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/toll-plaza-payment-illustration-download-in-svg-png-gif-file-formats--man-vehicle-barrier-road-traffic-illustrations-5933649.png"
                alt="Toll illustration"
                width="350"
                onError={handleImgError}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
