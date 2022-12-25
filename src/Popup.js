import React from 'react'
import { Button } from 'reactstrap';
import "./popup.css"

function Popup({
  openPopup,
  setOpenPopup,
  children,
  getWords,
}) {
  const handleClosePopup = () =>{
      setOpenPopup(false);
  }
  const handleOkPopup = () =>{

      getWords();
  }

  return (openPopup)?(
    <div className='popup'>
        <div className='popup-inner'>
            <Button className='close-btn' onClick={handleClosePopup}>Kapat</Button>
            <Button className='ok-btn' onClick={handleOkPopup}>Devam Et</Button>
         {children}
        </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
