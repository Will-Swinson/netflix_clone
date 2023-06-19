import React from "react";

export default function NetflixProfile() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-600">
      <div className="w-[1300px] ">
        <ul className="grid grid-cols-5 gap-8 mb-8 profile-list">
          <li className="overflow-hidden transition-all duration-200 ease-in rounded-md profile-item ">
            <a
              href="#"
              className="flex flex-col items-center gap-3 text-2xl text-white no-underline profile-link"
            >
              <img
                className="w-full border-transparent profile-img border-3 hover:border-2 hover:border-white"
                src="https://img.freepik.com/free-psd/3d-rendering-bear-emoji-icon_23-2150339711.jpg?w=826&t=st=1682847149~exp=1682847749~hmac=f6a80f812d66eb0d6884222c5c22aff201cb379fd408c731638686998d9ac6db"
                alt="profile photo"
              />
              profile1
            </a>
          </li>

          <li className="overflow-hidden transition-all duration-200 ease-in rounded-md profile-item">
            <a
              href="#"
              className="flex flex-col items-center gap-3 text-2xl text-white no-underline profile-link"
            >
              <img
                className="w-full border-transparent profile-img border-3 hover:border-2 hover:border-white"
                src="https://img.freepik.com/free-psd/3d-render-cat-emoji_23-2150311907.jpg?w=826&t=st=1682847181~exp=1682847781~hmac=1118ef47c0aed9f2f132eb2aa76633226f13dbb6c450055ce5b8131e36536d16"
                alt="profile photo"
              />
              profile2
            </a>
          </li>

          <li className="overflow-hidden transition-all duration-200 ease-in rounded-md profile-item">
            <a
              href="#"
              className="flex flex-col items-center gap-3 text-2xl text-white no-underline profile-link"
            >
              <img
                className="w-full border-transparent profile-img border-3 hover:border-2 hover:border-white"
                src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg&ga=GA1.1.941235715.1677496756&semt=ais"
                alt="profile photo"
              />
              profile3
            </a>
          </li>

          <li className="overflow-hidden transition-all duration-200 ease-in rounded-md profile-item">
            <a
              href="#"
              className="flex flex-col items-center gap-3 text-2xl text-white no-underline profile-link"
            >
              <img
                className="w-full border-transparent profile-img border-3 hover:border-2 hover:border-white"
                src="https://img.freepik.com/free-psd/ready-cinema-with-popcorn-drinks-3d-illustration_1419-2557.jpg?w=826&t=st=1682847255~exp=1682847855~hmac=a92bba8ceb5c088a0c3d2e6de9ecb3a326c5a1dbb1f0131096d0444d2ccec6e1"
                alt="profile photo"
              />
              profile4
            </a>
          </li>

          <li className="overflow-hidden transition-all duration-200 ease-in rounded-md profile-item">
            <a
              href="#"
              className="flex flex-col items-center gap-3 text-2xl text-white no-underline profile-link"
            >
              <img
                className="w-full border-transparent profile-img border-3 hover:border-2 hover:border-white"
                src="https://img.freepik.com/free-psd/ready-cinema-with-popcorn-drinks-3d-illustration_1419-2557.jpg?w=826&t=st=1682847255~exp=1682847855~hmac=a92bba8ceb5c088a0c3d2e6de9ecb3a326c5a1dbb1f0131096d0444d2ccec6e1"
                alt="profile photo"
              />
              profile5
            </a>
          </li>
        </ul>
        <button className="block px-6 py-4 mx-auto text-2xl text-gray-500 transition duration-200 bg-transparent border border-gray-500 border-none cursor-pointer btn hover:border-white hover:text-white">
          Manage profiles
        </button>
      </div>
    </div>
  );
}
