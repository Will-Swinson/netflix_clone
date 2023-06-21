import React from "react";
import lockImg from "../assets/Lock.png";
import { handleStripePayment } from "../utils/Stripe.jsx";

import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function SignUpPlanPaymentPage() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="nav nav-3">
        <a href="">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
            alt=""
          />
        </a>
        <a href="" className="btn-logout text-underline">
          Sign Out
        </a>
      </nav>
      <section className="flex items-start justify-center h-full">
        <form className="flex flex-col items-center justify-center w-full mx-auto mt-20 ">
          <div className="flex flex-col items-center justify-center w-1/2">
            <img src={lockImg} className="mb-8 w-14" />
            <p className="flex text-md ">
              STEP&nbsp;<p className="font-bold">3&nbsp;</p>OF&nbsp;{" "}
              <p className="font-bold">3</p>
            </p>
            <h2 className="w-full mt-2 mb-4 text-3xl font-bold text-center whitespace-normal ">
              Choose how to pay.
            </h2>
            <p className="text-xl w-[480px] font-semibold text-center mb-6">
              Your payment is encrypted and you can change how you pay anytime.
            </p>
            <p className="w-[300px] text-xl font-bold text-center">
              Secure for peace of mind. Cancel easily online.
            </p>
            <div className="flex flex-col w-full mt-6">
              <p className="flex justify-end w-full mb-2">
                End-to-end encrypted 🔒
              </p>
              <button
                onClick={handleStripePayment}
                className="w-full rounded h-[75px] mb-2 border-4 hover:border-2 border-gray-400 bg-white text-3xl justify-start font-semibold text-black flex"
              >
                <div className="flex justify-between w-full ml-6">
                  <div className="flex w-full">
                    <p className="text-lg font-bold">Credit or Debit Card</p>
                    <FaCcVisa className="ml-2" />
                    <FaCcMastercard className="ml-2" />
                    <FaCcDiscover className="ml-2" />
                    <FaCcAmex className="ml-2" />
                  </div>
                  <IoIosArrowForward size={30} />
                </div>
              </button>
            </div>
          </div>
        </form>
      </section>
      <footer className="footer footer-gray margin-top-1">
        <div className="footer-container margin-inline">
          <p>
            Questions? <br />
            Call 007-803-321-2130
          </p>
          <div className="links">
            <ul className="">
              <li>
                <a className="text-terms text-underline" href="">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-terms text-underline" href="">
                  Cookie Preferences
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a className="text-terms text-underline" href="">
                  Help Center
                </a>
              </li>
              <li>
                <a className="text-terms text-underline" href="">
                  Corporate Information
                </a>
              </li>
            </ul>

            <a className="text-terms text-underline" href="">
              Terms of Use
            </a>

            <a className="text-terms text-underline" href="">
              Privacy
            </a>
          </div>

          <div className="language">
            <select className="language-select" onChange="location=this.value;">
              <option value="english" selected>
                English
              </option>
              <option value="">Bahasa Indonesia</option>
            </select>
            <div className="language-icon">
              <i className="fas fa-globe globe"></i>
              <i className="fas fa-chevron-down chevron"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
