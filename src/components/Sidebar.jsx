import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const [showProfile, setShowProfile] = useState(false);
  const [showHelp, setshowHelp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to detect active link based on current path
  const getActive = (path) => {
    if (path === "/dashboard") return "Home";
    if (path === "/rechargehistory") return "Rechargehistory";
    if (path === "/wallet") return "Wallet";
    if (path === "/offers") return "Offers";
    if (path === "/help") return "Help";
    if (path === "/") return "Logout";
    return "";
  };


  const active = getActive(location.pathname);

  // Navigation function
  const naving = (prop) => {
    if (prop === "Home") navigate("/dashboard");
    else if (prop === "Rechargehistory") navigate("/rechargehistory");
    else if (prop === "Wallet") navigate("/wallet");
    else if (prop === "offers") navigate("/offers");
    else if (prop === "Logout") navigate("/");
  };

  return (
    <>

      <aside className="sidebar p-5 d-flex flex-column" style={{ height: "100vh", backgroundColor: "#007b83" }}>
        {/* Profile Section */}
        <div className="profile text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="profile-img mb-2"
            style={{ cursor: "pointer", width: "80px", borderRadius: "50%" }}
            onClick={() => setShowProfile(true)}
          />
          <h6 className="fw-semibold text-dark">Welcome, User</h6>
        </div>

        {/* Profile Modal */}
        {showProfile && (
          <div
            className="modal fade show"
            style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4 text-center">
                <button
                  type="button"
                  className="btn-close ms-auto"
                  onClick={() => setShowProfile(false)}
                ></button>

                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Profile"
                  className="rounded-circle mb-3"
                  width="80"
                  height="80"
                />
                <h6 className="fw-bold mb-0" style={{ color: "black" }}>
                  mrsanjeetsingh9565@gmail.com
                </h6>
                <p className="text-muted mb-3">Premium Member</p>

                <form className="text-start">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="mrsanjeetsingh9565@gmail.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter mobile number"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Change Profile Picture</label>
                    <input type="file" className="form-control" />
                  </div>

                  <button
                    type="button"
                    className="btn w-100"
                    style={{ backgroundColor: "#007b83", color: "white" }}
                    onClick={() => setShowProfile(false)}
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {showHelp && (
          <div
            className="modal fade show"
            style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered" style={{ width: "350px" }}>

              <div className="modal-content p-4 text-center" style={{ borderRadius: "1.3rem" }}>
                <div style={{ display: "flex", textAlign: "center" }}>
                  <h4 style={{ color: "black", width: "100%" }}>Help and Support</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setshowHelp(false)}
                  ></button></div>
                <div>
                  <div style={{ color: "black", textAlign: "left", margin: "10px 0 10px 0" }}>Email: ops@logiclead.in</div>
                  <div style={{ color: "black", textAlign: "left", margin: "10px 0 10px 0" }}>Email: tech@logiclead.in</div>
                  <div style={{ color: "black", textAlign: "left", margin: "10px 0 10px 0" }}>Mobile: XXXXXXXXXX</div>


                </div>
                {/* <button
                  type="button"
                  className="btn-close ms-auto"
                  onClick={() => setshowHelp(false)}
                ></button>

                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Profile"
                  className="rounded-circle mb-3"
                  width="80"
                  height="80"
                />
                <h6 className="fw-bold mb-0" style={{ color: "black" }}>
                  mrsanjeetsingh9565@gmail.com
                </h6>
                <p className="text-muted mb-3">Premium Member</p>

                <form className="text-start">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="mrsanjeetsingh9565@gmail.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter mobile number"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Change Profile Picture</label>
                    <input type="file" className="form-control" />
                  </div>

                  <button
                    type="button"
                    className="btn w-100"
                    style={{ backgroundColor: "#007b83", color: "white" }}
                    onClick={() => setshowHelp(false)}
                  >
                    Update Profile
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Items */}
        <ul className="nav flex-column">
          <li
            className={`nav-item mb-2 p-2 rounded ${active === "Home" ? "active-item" : ""}`}
            onClick={() => naving("Home")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-house me-2"></i> Home
          </li>

          <li
            className={`nav-item mb-2 p-2 rounded ${active === "Rechargehistory" ? "active-item" : ""}`}
            onClick={() => naving("Rechargehistory")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-rotate me-2"></i> Recharge History
          </li>

          <li
            className={`nav-item mb-2 p-2 rounded ${active === "Wallet" ? "active-item" : ""}`}
            onClick={() => naving("Wallet")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-wallet me-2"></i> Wallet History
          </li>

          <li
            className={`nav-item mb-2 p-2 rounded ${active === "Offers" ? "active-item" : ""}`}
            onClick={() => naving("offers")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-gift me-2"></i> Offers
          </li>

          <li
            className={`nav-item mb-2 p-2 rounded ${active === "Help" ? "active-item" : ""}`}
            onClick={() => setshowHelp(true)}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-headset me-2"></i> Help & Support
          </li>

          <li
            className={`nav-item mb-2 p-2 rounded ${active === "Logout" ? "active-item" : ""}`}
            onClick={() => naving("Logout")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
          </li>
        </ul>
      </aside>

      {/* Simple CSS for active highlight */}
      <style>{`
        .active-item {
          background-color: #73e2eaff;
          color: white !important;
        }
        .active-item i {
          color: white;
        }
        .nav-item:hover {
          background-color: #e0f7f9;
        }
      `}</style>

    </>
  );
}
