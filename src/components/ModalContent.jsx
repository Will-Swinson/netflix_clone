import React from "react";

function ModalContent({ closeModal }) {
  return (
    <div>
      <h2>Movie Details</h2>
      <button onClick={closeModal}>Close</button>
      {/* Add more content as needed */}
    </div>
  );
}

export default ModalContent;
