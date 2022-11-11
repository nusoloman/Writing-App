import React from "react";
import "./popup.css";

function Popup(props) {
  const closePopup = () => {
    props.handleClose();
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={closePopup} className="close-btn">
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
