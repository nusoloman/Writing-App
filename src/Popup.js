import React from 'react'
import { Button } from 'reactstrap';
import "./popup.css"

function Popup({
  openPopup,
  setOpenPopup,
  children,
}) {
  const handlePopup = () =>{
      setOpenPopup(false);
  }

  return (openPopup)?(
    <div className='popup'>
        <div className='popup-inner'>
            <Button className='close-btn' onClick={handlePopup}>close</Button>
         {children}
        </div>
    </div>
  ):"";
}

export default Popup