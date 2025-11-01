import React from "react";
import "./Offers.css";
import Sidebar from "./Sidebar";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "WELLCOME50%",
      description: "Get instant 50% off",
      validTill: "Valid Till 25 Oct 2025",
      iconColor: "#00BFFF",
    },
    {
      id: 2,
      title: "WELLCOME20%",
      description: "Get instant 20% off",
      validTill: "Valid Till 30 Nov 2025",
      iconColor: "#00BFFF",
    },
    {
      id: 3,
      title: "DIWALI25%",
      description: "Get instant 25% cashback",
      validTill: "Valid Till 15 Dec 2025",
      iconColor: "#00BFFF",
    },
  ];
  const viewportWidth = window.innerWidth;
  console.log("Viewport width:", viewportWidth);
  return (
    <div style={{ display: "flex", minHeight: "10vh" }}>
      {/* Sidebar Section */}
      {/* <div style={{ width: "250px", flexShrink: 0 }}>
        <Sidebar />
      </div> */}

      {/* Offers Section */}
      <div className="offers-container shadow-sm flex-grow-1" style={{ marginLeft: `${viewportWidth < 700 ? "0%" : "20%"}` }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold text-dark">
            <i className="fa-solid fa-gift me-2 text-danger"></i> Exclusive Offers
          </h4>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Fastag-logo.png"
            alt="Bharat Connect"
            className="brand-logo"
          />
        </div>

        <div className="d-flex flex-wrap gap-4 justify-content-start">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card p-4 shadow-sm">
              <div
                className="icon-circle mb-3"
                style={{ backgroundColor: offer.iconColor }}
              >
                <i className="fa-solid fa-gift fa-lg text-white"></i>
              </div>
              <h5 className="fw-bold">{offer.title}</h5>
              <p className="text-muted">{offer.description}</p>
              <span className="badge bg-success px-3 py-2">{offer.validTill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
