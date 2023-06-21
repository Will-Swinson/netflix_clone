import { useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
import bluePurpleGradientBackground from "../assets/download.jfif";
import popcornImg from "../assets/popcorn_image.png";
import appleVideoImg from "../assets/device-pile.png";
import griddyGif from "../assets/griddy-gif.gif";
import kidImg from "../assets/kid-img.png";
import phoneImg from "../assets/phone-img.jpg";
import { IoIosArrowForward } from "react-icons/io";

import FrequentlyAsked from "../components/FrequentlyAsked";
import FrequentlyAskedButton from "../components/FrequentlyAskedButton";

export default function LandingPage() {
  const [isDropped, setIsDropped] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
  });

  const handleDropdown = (dropdown) => {
    setIsDropped((prevIsOpen) => ({
      ...Object.keys(prevIsOpen).reduce((acc, curr) => {
        acc[curr] = curr === dropdown ? !prevIsOpen[curr] : false;
        return acc;
      }, {}),
    }));
  };

  return (
    <>
      <div
        className="relative bg-cover"
        style={{
          backgroundImage:
            "url(https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg)",
          height: "55vh",
        }}
      >
        <nav className="flex relative w-full h-[50px] xl:h-[100px] justify-between items-center ">
          <div className="h-full w-[120px] xl:w-[175px] p-2 ml-6 xl:ml-[190px] mt-6 ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" />
          </div>
          <div className="h-full w-auto relative flex mr-[100px] xl:mr-[300px] mt-12 ">
            <BsGlobe2 className="text-white h-4 w-4  absolute top-2 left-1.5 " />
            <select className="flex justify-center items-center selector-class h-8 mr-2 w-[120px] rounded text-white bg-black bg-opacity-50 border-[0.5px] border-white text-[14px] font-bold text-center">
              <option>English</option>
            </select>
            <button className="h-8 whitespace-nowrap bg-[rgb(229,9,20)] hover:bg-red-700 w-[75px] rounded text-white text-[14px] font-bold text-center ">
              Sign In
            </button>
          </div>
        </nav>
        <div className=" text-white justify-center absolute w-full mx-auto top-[36%]  ">
          <div className="flex flex-col items-center justify-center text-white">
            <h2 className="mb-2 text-xl font-bold text-center md:text-3xl xl:text-5xl">
              Unlimited movies, TV Shows, and more
            </h2>
            <h3 className="text-md md:text-[20px] mb-4 ">
              Watch anywhere. Cancel anytime.
            </h3>
            <p className="text-md md:text-[20px] mb-2">
              {" "}
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full mt-4">
            <input
              id="inputSignup"
              className="font-bold w-full md:w-[300px] h-[52px] rounded bg-gray-800 placeholder-gray-400 px-4 bg-opacity-[70%] text-md md:text-l border border-1 focus:text-xs placeholder-move-up transition-transform duration-1000 "
              type="text"
              placeholder="Email address"
            />
            <button className="w-[275px] h-[55px] md:w-[175px] ml-2 rounded bg-red-600 font-bold text-xl md:text-1xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-full bg-black">
        <div
          className="absolute flex w-4/5 bg-no-repeat bg-cover top-0 xl:top-[-1.5%] left-[10%] justify-around"
          style={{
            backgroundImage: `url(${bluePurpleGradientBackground})`,
            height: "15vh",
          }}
        >
          <div className="flex items-center justify-center w-full h-full mr-48">
            <div className="flex items-center justify-end flex-1 w-full h-full ">
              <img src={popcornImg} className="w-[120px]" />
            </div>
            <div className="flex flex-col items-start justify-center flex-1 w-full h-full leading-10 text-white">
              <h2 className="text-xl font-bold whitespace-nowrap">
                {" "}
                The Netflix you love for just $6.99.
              </h2>
              <p className="text-lg">Get the Standard with ads plan.</p>
              <a
                className="flex items-center justify-center text-lg font-bold text-blue-500 underline"
                href="#"
              >
                Learn More
                <IoIosArrowForward className="mt-1" size={25} />
              </a>
            </div>
          </div>
        </div>
        {/* 1st div after signup */}
        <div className="w-full h-[900px] border-b-8 border-gray-600  text-white flex flex-col justify-start items-center  text-center xl:flex-row xl:justify-center xl:text-start ">
          <div className="xl:flex text-center xl:flex-col xl:items-start xl:justify-center xl:h-[500px] xl:mt-24 mt-52">
            <h2 className="mb-10 text-5xl font-bold">Enjoy on your TV</h2>
            <p className="text-xl">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
            </div>
            <img
              className="absolute top-[22%] left-[14%] z-0 w-[71%] h-[52%]"
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDlsMDUzdnZ4a3A3MTFzcTk1bjhkNTFxaXVxYmpuM2J0NjFoczJ3YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZdZD9c1zAUGkpkjbIK/giphy.gif"
            />
          </div>
        </div>
        <div className="w-full h-[800px] border-b-8 border-gray-600  text-white flex flex-col mx-auto justify-center items-center text-center lg:flex-row-reverse ">
          <div className="flex flex-col items-center justify-center w-full h-full ml-20 xl:items-start">
            <h2 className="mb-10 text-5xl font-bold">Watch everywhere</h2>
            <p className="w-3/4 text-lg xl:text-2xl xl:text-start">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="relative w-3/4 xl:w-[1200px] xl:ml-32">
            <div className="relative z-10">
              <img src={appleVideoImg} className="w-[1200px]" />
            </div>
            <img
              className="absolute top-[10%] left-[18%] z-0 w-[62%] h-[52%]"
              src={griddyGif}
            />
          </div>
        </div>
        <div className="w-full h-[800px] border-b-8 border-gray-600  text-white flex flex-col justify-start items-center text-center xl:flex-row xl:justify-center xl:text-start ">
          <div className="w-full xl:w-[600px] flex flex-col justify-center xl:items-start xl:justify-center md:h-[500px] xl:ml-72  xl:mr-32 ">
            <h2 className="mb-10 text-5xl font-bold ">
              Create profiles for kids
            </h2>
            <p className="xl:w-[700px] text-xl ">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
          <div className="relative mb-10">
            <img src={kidImg} />
          </div>
        </div>
        <div className="w-full h-[800px] border-b-8 border-gray-600  text-white flex flex-col justify-start items-center text-center xl:flex-row-reverse xl:justify-center xl:text-start ">
          <div className="w-full xl:w-[600px] flex flex-col justify-center xl:items-start xl:justify-center md:h-[500px] xl:ml-10  xl:mr-32 ">
            <h2 className="mb-10 text-5xl font-bold ">
              Download your shows to watch offline
            </h2>
            <p className="xl:w-[700px] text-xl ">
              Only available on ad-free plans.
            </p>
          </div>
          <div className="relative mb-10">
            <img src={phoneImg} />
          </div>
        </div>
        <div className="w-full h-[1200px] border-b-8 border-gray-600  text-white ">
          <div className="flex flex-col items-center justify-start w-full h-full ">
            <h2 className="mt-16 text-5xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col items-center justify-start w-full h-full mt-8 ">
              <FrequentlyAsked
                onDropDown={handleDropdown}
                isDropped={isDropped.dropdown1}
                title="What is Netflix?"
                id="dropdown1"
              >
                <p className="w-4/5 mt-6 mb-6">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                </p>
                <p className="w-4/5 h-full">
                  You can watch as much as you want, whenever you want – all for
                  one low monthly price. There's always something new to
                  discover and new TV shows and movies are added every week!
                </p>
              </FrequentlyAsked>
              <FrequentlyAsked
                id="dropdown2"
                onDropDown={handleDropdown}
                isDropped={isDropped.dropdown2}
                title="How much does Netflix cost?"
              >
                <p className="w-4/5 mt-6 mb-6">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from $6.99 to $19.99 a month. No extra costs, no contracts.
                </p>
              </FrequentlyAsked>
              <FrequentlyAsked
                id="dropdown3"
                onDropDown={handleDropdown}
                isDropped={isDropped.dropdown3}
                title="Where can I watch?"
              >
                <p className="w-4/5 mt-2 mb-2">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                </p>
                <p className="w-4/5 mt-2 mb-2">
                  You can also download your favorite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </p>
              </FrequentlyAsked>
              <FrequentlyAsked
                id="dropdown4"
                onDropDown={handleDropdown}
                isDropped={isDropped.dropdown4}
                title="How do I cancel?"
              >
                <p className="w-4/5 mt-2 mb-2">
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              </FrequentlyAsked>
              <FrequentlyAsked
                id="dropdown5"
                onDropDown={handleDropdown}
                isDropped={isDropped.dropdown5}
                title="What can I watch on Netflix?"
              >
                <p className="w-4/5 mt-2 mb-2">
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              </FrequentlyAsked>
              <FrequentlyAsked
                id="dropdown6"
                onDropDown={handleDropdown}
                isDropped={isDropped.dropdown6}
                title="is Netflix good for kids?"
              >
                <p className="w-4/5 mt-2 mb-2">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space.
                </p>
                <p className="w-4/5 mt-2 mb-2">
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </p>
              </FrequentlyAsked>
            </div>
            <FrequentlyAskedButton />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full h-full text-center text-white ">
          <div className="w-full">
            <h2 className="flex items-center justify-start w-full mt-10 mb-10 ml-10 text-xl font-bold">
              Questions? Call
              <a href="" className="ml-2 underline">
                1-844-505-2993
              </a>
            </h2>
          </div>
          <div className="flex justify-between w-full h-full">
            <ul className="flex flex-col items-start justify-center ml-10 leading-[40px]">
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                FAQ
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Investor Relations
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Buy Gift Cards
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Cookie Preferences
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Legal Notices
              </a>
            </ul>
            <ul className="flex flex-col items-start justify-center ml-10 leading-[40px]">
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Help Center
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Jobs
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Ways to Watch
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Corporate Information
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Only on Netflix
              </a>
            </ul>
            <ul className="flex flex-col flex-wrap items-start justify-center ml-10 leading-[36px]">
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Account
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Netflix Shop
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Terms of Use
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Contact Us
              </a>
              <a className="flex-shrink-0 w-[200px] leading-6 mt-2 overflow-hidden text-left underline cursor-pointer ">
                {" "}
                Do Not Sell or Share My Personal Information
              </a>
            </ul>
            <ul className="flex flex-col items-start justify-center mr-32 leading-[40px]">
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Media Center
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Redeem Gift Cards
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Privacy
              </a>
              <a className="flex underline cursor-pointer whitespace-nowrap">
                {" "}
                Speed Test
              </a>
            </ul>
          </div>
          <div className="h-full w-full relative flex ml-[75px] mt-12 mb-12 ">
            <BsGlobe2 className="text-white h-4 w-4  absolute top-2 left-1.5 " />
            <select className="flex justify-center items-center selector-class h-8 mr-2 w-[120px] rounded text-white bg-black bg-opacity-50 border-[0.5px] border-white text-[14px] font-bold text-center">
              <option>English</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

//backgroundimg for gifs 1 is watching netflix
{
  /* <img
  alt
  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
  data-uia="nmhp-card-animation-asset-image"
  class="default-ltr-cache-1d3w5wq"
></img>; */
}

//
// <img
//   alt
//   src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
//   data-uia="nmhp-card-animation-asset-image"
//   class="default-ltr-cache-1d3w5wq"
// ></img>;

// gif stanger things
//https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDlsMDUzdnZ4a3A3MTFzcTk1bjhkNTFxaXVxYmpuM2J0NjFoczJ3YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZdZD9c1zAUGkpkjbIK/giphy.gif

// watching netflix gif
// https://media.tenor.com/zksTaH53cq8AAAAM/digibyte-dgb.gif
