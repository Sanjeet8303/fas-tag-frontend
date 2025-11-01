import React, { useState, useEffect } from 'react'
import Typewriter from "typewriter-effect"
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  // for root image 
  const [text, setText] = useState("");
  const fullText = "Welcome to Digital India — Pay Automatically";

  const navigate = useNavigate();//navigation hook

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  //function for handling the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    navigate("/dashboard");
  }

  return (
    <div>
      <div class="navbar navbar-expand-lg bg-light shadow-sm px-5 d-flex justify-content-between align-items-center">

        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/fastag-logo-hd.png" alt="Logo" width="42" height="42" class="me-2" />
          <span class="fw-bold fs-5 text-primary">FASTag</span>
        </a>

        <div class="d-flex align-items-center ">
          <i class="fa-solid fa-user" style={{ cursor: "pointer" }}
            onClick={() => setShowModal(true)}
          ></i>
          <span class="fw-semibold text-dark"

            style={{ cursor: "pointer" }}
            onClick={() => setShowModal(true)}
          >Wallet</span>
        </div>
      </div>

      {/* FASTag Recharge Section */}
      <div className="container py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between">
        {/* LEFT SIDE TEXT */}
        <div className="text-section mb-5 mb-lg-0">
          <h1 className="fw-bold display-5 text-dark">
            <Typewriter
              options={{
                strings: [
                  "FASTag Recharge Online at Logiclead",
                  "Multiple Payment Options",
                  "24×7 Customer Support",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h1>

          <ul className="mt-4 list-unstyled fs-5">
            <li className="mb-2">
              <i className="fa-solid fa-circle-check text-success me-2"></i>
              Multiple Payment Options
            </li>
            <li className="mb-2">
              <i className="fa-solid fa-circle-check text-success me-2"></i>
              Multiple Discounts & Offers for FASTag
            </li>
            <li>
              <i className="fa-solid fa-circle-check text-success me-2"></i>
              24×7 Customer Support
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE CARD */}
        <div
          className="card border-0 shadow-lg"
          style={{
            borderRadius: "15px",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <div
            className="card-header d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: "#007b83",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
          >
            <h5 className="text-white mb-0">FASTag Recharge</h5>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Bharat_Connect_Primary_Logo_SVG.svg/250px-Bharat_Connect_Primary_Logo_SVG.svg.png"
              alt="BharatConnect"
              width="90"
            />
          </div>

          <div className="card-body bg-light">
            <input
              type="text"
              placeholder="Enter vehicle number"
              className="form-control mb-3 p-3"
              style={{ borderRadius: "10px" }}
            />
            <button
              type='button'
              className="btn w-100 text-white fw-semibold"
              style={{
                backgroundColor: "#00b4d8",
                borderRadius: "10px",
              }}
              onClick={() => setShowModal(true)}
            >
              Proceed
            </button>
            <p className="text-center text-secondary mt-3 mb-0">
              ⚡ Get the best deals on FASTag Recharge
            </p>
          </div>
        </div>
      </div>



      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Login</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}



      {/*  Offer Banner Section */}
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-between p-4 my-5"
        style={{
          background: "linear-gradient(90deg, #007b83 40%, #00b4d8 100%)",
          borderRadius: "15px",
          overflow: "hidden",
          color: "white",
          position: "relative",
        }}
      >
        {/* LEFT SIDE TEXT */}
        <div
          className="text-white p-4"
          style={{
            flex: "1",
            zIndex: "2",
            animation: "fadeInLeft 1s ease-in-out",
          }}
        >
          <h2 className="fw-bold mb-2" style={{ fontSize: "2rem" }}>
            Grab Exciting <span style={{ color: "#ffd60a" }}>Rewards</span> on Your Next Recharge!
          </h2>
          <p className="fs-5 mb-3">
            Flat <span style={{ color: "#ffd60a", fontWeight: "700" }}>₹50 OFF</span> on your FASTag recharge.
          </p>

          <button
            type="button"
            className="btn fw-semibold px-4 py-2 mt-2"
            style={{
              backgroundColor: "#ffd60a",
              color: "#000",
              borderRadius: "10px",
              fontSize: "1rem",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Apply Code <span className="fw-bold text-danger">EXTRA50</span> Now!
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          style={{
            flex: "1",
            position: "relative",
            animation: "fadeInRight 1s ease-in-out",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/513106144/photo/traffic-on-highway-with-cars.jpg?s=612x612&w=0&k=20&c=dXm6BH6TnIHFu202PlQJNdM12lZQBt11Tkbqx85rHdQ="
            alt="Highway Offer"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
              boxShadow: "0 0 25px rgba(0,0,0,0.3)",
            }}
          />
          {/* Overlay gradient for better text contrast */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              background:
                "linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0))",
            }}
          ></div>
        </div>
      </div>


      {/* FASTag Provider Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4 fw-semibold text-dark">FASTag Providers</h2>

          <div className="row justify-content-center g-3 g-md-4">
            {[
              {
                name: "Indian Highways Management Co. Ltd.",
                img: "https://ihmcl.co.in/wp-content/uploads/2020/08/IHMCL-Logo.jpeg",
              },
              {
                name: "Kotak Mahindra Bank",
                img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Kotak_Mahindra_Group_logo.svg/2560px-Kotak_Mahindra_Group_logo.svg.png",
              },
              {
                name: "State Bank of India",
                img: "https://blog.mikelegal.com/wp-content/uploads/2021/11/SBI-Logo-scaled.jpeg",
              },
              {
                name: "ICICI Bank",
                img: "https://brandeps.com/logo-download/I/ICICI-Bank-logo-01.png",
              },
              {
                name: "Axis Bank",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/AXISBank_Logo.svg/1200px-AXISBank_Logo.svg.png",
              },
              {
                name: "HDFC Bank",
                img: "https://images.seeklogo.com/logo-png/55/2/hdfc-bank-logo-png_seeklogo-556499.png",
              },
              {
                name: "Union Bank of India",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq-2EugzZQ_-nRmJM8vJwVuQ-rPZl_pDcHA&s",
              },
              {
                name: "Bank of Baroda",
                img: "  https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png",
              },
              {
                name: "IDFC FIRST Bank",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_IDFC_First_Bank.svg/2560px-Logo_of_IDFC_First_Bank.svg.png",
              },
              {
                name: "Federal Bank",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Federal-Bank-Logo_SVG.svg/2560px-Federal-Bank-Logo_SVG.svg.png",
              },
              {
                name: "UCO Bank",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_XYDqOZjPhDvojIiVAwoA1FlIUJ8bLNasw&s",
              },
              {
                name: "Indian Bank",
                img: "https://images.seeklogo.com/logo-png/22/1/indian-bank-logo-png_seeklogo-223801.png",
              },
            ].map((bank, index) => (
              <div
                className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
                key={index}
              >
                <div className="card provider-card shadow-sm border-0 d-flex align-items-center justify-content-center">
                  <div className="card-body text-center">
                    <img
                      src={bank.img}
                      alt={bank.name}
                      className="img-fluid mb-2"
                      style={{
                        height: "60px",
                        objectFit: "contain",
                      }}
                    />
                    <p className="fw-semibold text-dark small text-wrap">{bank.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-3 text-dark">About Us</h2>
              <p className="text-muted">
                Welcome to <span className="fw-semibold text-dark">Logiclead</span>, your trusted platform for FASTag recharge.
                We make it easy for vehicle owners to recharge their FASTag quickly and securely from anywhere.
              </p>
              <p className="text-muted">
                Our goal is to save your time at toll plazas by providing a smooth recharge experience
                with multiple payment options. With reliable service, exciting offers, and dedicated support,
                we are here to make your travel easier and more convenient.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <div className="about-img-wrapper shadow-sm rounded-4 overflow-hidden d-inline-block">
                <img
                  src="https://th-i.thgim.com/public/incoming/lil4sh/article69218009.ece/alternates/LANDSCAPE_1200/IMG_HY15FASTAG_2_1_SICBLGGA.jpg"
                  alt="FASTag card"
                  className="img-fluid rounded-4 about-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 faq-section bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark">
            Frequently Asked Questions
          </h2>

          <div className="accordion" id="faqAccordion">

            <div className="accordion-item mb-3 shadow-sm border-0 rounded-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-semibold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  What is FASTag?
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  FASTag is an electronic toll collection system operated by the National
                  Highway Authority of India (NHAI). It uses RFID technology for automatic toll deduction.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 shadow-sm border-0 rounded-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-semibold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  How can I recharge my FASTag on Logiclead?
                </button>
              </h2>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Simply log in to your Logiclead account, select your FASTag provider, enter
                  your vehicle details, and choose a payment method to complete the recharge instantly.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 shadow-sm border-0 rounded-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-semibold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  What payment methods are accepted?
                </button>
              </h2>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  We accept all major debit and credit cards, UPI, and popular wallets like
                  Paytm, PhonePe, and Google Pay for a secure payment experience.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 shadow-sm border-0 rounded-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-semibold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                >
                  Is there any minimum recharge amount?
                </button>
              </h2>
              <div
                id="faq4"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  The minimum recharge amount depends on your FASTag provider,
                  usually starting from ₹100.
                </div>
              </div>
            </div>

            <div className="accordion-item shadow-sm border-0 rounded-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-semibold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq5"
                >
                  How long does it take for the recharge to reflect?
                </button>
              </h2>
              <div
                id="faq5"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  In most cases, your FASTag recharge reflects within a few minutes after successful payment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Typewriter Banner Section */}
      <div className="text-center my-5">
        <img
          src="https://images.news18.com/ibnlive/uploads/2025/09/Untitled-design-2025-09-19T175318.980-2025-09-a462469326a91ca1dc5794f4ff2efed6.jpg"
          alt="FASTag Toll Booth"
          className="img-fluid rounded-4 shadow-lg"
          style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
        />

        <h2 className="mt-4 fw-bold typewriter-text">
          {text}
        </h2>
      </div>


      {/* Footer Section */}
      <footer className="footer-section text-light py-5 mt-5">
        <div className="container">
          <div className="row align-items-start">
            {/* Left Side - Logo and Text */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="fw-bold d-flex align-items-center">
                <i className="fa-solid fa-layer-group me-2"></i> FASTag
              </h3>
              <p className="mt-3 small">
                "Enhancing digital toll payment convenience through easy FASTag recharges and uninterrupted transactions nationwide in India."
              </p>
            </div>

            {/* Right Side - Contact Info */}
            <div className="col-md-6">
              <h5 className="fw-semibold mb-3">Reach Us</h5>
              <p className="mb-2">
                <i className="fa-solid fa-envelope me-2"></i> temp@gmial.com
              </p>
              <p className="mb-2">
                <i className="fa-solid fa-envelope me-2"></i>sanju@gmail.com
              </p>
              <p className="mb-0">
                <i className="fa-solid fa-location-dot me-2"></i> Office No 42, First Floor, F-12, Sector 10, Noida,<br />
                Gautam Buddha Nagar, Uttar Pradesh, 201301
              </p>
            </div>
          </div>

          <hr className="my-4" />

          {/* Bottom Row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
            <p className="mb-2 mb-md-0">© 2025 Logiclead. All rights reserved</p>
            <div>
              <a href="#" className="text-light text-decoration-none me-3">Terms & Conditions</a>
              <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>




    </div>
  )
}
