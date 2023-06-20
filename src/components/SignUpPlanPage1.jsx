import React from "react";

export default function SignUpPlanPage1() {
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
      <section className="flex items-center justify-center flex-1">
        <form className="mt-20">
          <p className="flex text-xs ">
            STEP&nbsp;<p className="font-bold">1&nbsp;</p>OF&nbsp;{" "}
            <p className="font-bold">3</p>
          </p>
          <h2 className="text-2xl ">Welcome back!</h2>
          <h2>Joining Netflix is easy.</h2>
          <p>Enter your password and you'll be watching in no time.</p>
          <p>Email</p>
          <p>RANDOM EMAIL</p>
          <input type="password" placeholder="Enter your password"></input>
          <p>Forgot your password?</p>
          <button>Next</button>
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
