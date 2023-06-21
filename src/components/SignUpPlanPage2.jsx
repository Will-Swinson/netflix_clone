import React from "react";
import "../signup.css";
export default function SignUpPlanPage2() {
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
        <form className="flex flex-col items-start justify-center mt-20 ">
          <p className="flex text-xs ">
            STEP&nbsp;<p className="font-bold">1&nbsp;</p>OF&nbsp;{" "}
            <p className="font-bold">3</p>
          </p>
          <h2 className="flex-wrap w-[480px] mt-2 mb-4 text-3xl font-bold whitespace-normal">
            Create a password to start your membership
          </h2>
          <p className="text-xl font-semibold w-[380px] ">
            Just a few more steps and you're done! We hate paperwork, too.
          </p>
          <input
            id="inputSignup"
            className="w-full px-2 py-5 mt-2 placeholder-black transition-transform duration-1000 border border-black rounded p border-1 placeholder-move-up"
            placeholder="Email"
          ></input>
          <input
            id="inputSignup"
            className="w-full px-2 py-5 mt-2 placeholder-black transition-transform duration-1000 border border-black rounded placeholder-move-up border-1"
            placeholder="Add a password"
          ></input>
          <button className="w-full rounded mt-6 h-[75px] text-3xl font-semibold text-white bg-netflix-red">
            Next
          </button>
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
