import ReactModal from "react-modal";
import { useState, useEffect } from "react";
import profileIcons from "../data/profileIcons";
import { useMovies } from "../context/MovieProvider";
import { Link } from "react-router-dom";

export default function ProfileModal({
  isOpened,
  handleIsOpened,
  handleCloseModal,
}) {
  const {
    handleAddProfile,
    setProfileIconRandom,
    setProfileName,
    profileIconRandom,
    profileName,
  } = useMovies();

  useEffect(() => {
    if (isOpened) {
      setProfileIconRandom(
        profileIcons[Math.floor(Math.random() * profileIcons.length)]?.url
      );
    }
  }, [isOpened]);

  function handleProfileData(e) {
    e.preventDefault();
    setProfileName(e.target.value);
  }

  console.log(isOpened);

  return (
    <>
      <ReactModal
        ariaHideApp={false}
        isOpen={isOpened}
        onRequestClose={handleCloseModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        className="p-0 flex bg-[#141414] w-full rounded-lg h-full text-white justify-center "
      >
        <div className="flex w-full  h-full bg-black justify-center items-center">
          <form
            onSubmit={handleAddProfile}
            className="bg-gray-600 w-full h-full flex flex-col justify-center items-start"
          >
            <div className="mb-6 ml-2">
              <h2 className="w-2/3 flex justify-start font-signInFont text-3xl font-semibold">
                Add Profile
              </h2>
              <p>Add a profile for another person watching Netflix.</p>
            </div>
            <div className="w-full h-[140px] flex justify-center items-center ml-2 border-t-2 border-b-2 border-black">
              <div className="w-2/4 h-3/4 mr-2  ">
                <img src={profileIconRandom} className="w-full h-full" />
              </div>
              <input
                value={profileName}
                onChange={handleProfileData}
                className="w-full h-1/4 bg-gray-900 mb-4 px-2 py-4 rounded border-2 border-gray-400 mr-6 "
                placeholder="Enter Profile Name"
              ></input>
            </div>
            <div className="flex w-full h-[40px] justify-around items-center mt-4">
              <button className=" text-xl z-10 text-center flex items-center justify-center font-bold w-2/5 h-full bg-white text-black font-signInFont">
                Continue
              </button>
              <button
                onClick={handleCloseModal}
                className=" text-xl z-10 text-center flex items-center justify-center font-bold  h-full w-2/5 bg-gray-900 font-signInFont"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  );
}
