import React from "react";
import footerBg from "../../assets/images/footer.png";

const Footer2 = () => {
  return (
    <footer
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBg})`, backgroundSize: "cover" }}
    >
      <div className="footer p-10 ">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="footer-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span> Imrul Emon</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
