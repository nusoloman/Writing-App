import React from "react";
import { Button } from "reactstrap";
import "./popup.css";

function Popup({
  openPopup,
  setOpenPopup,
  level,
  getWords,
  trueValue,
  setTrueValue,
  falseValue,
  setFalseValue,
  initialValue,
  setLevel,
  leftTimeForPopup,
}) {
  const handleClosePopup = () => {
    setFalseValue(0);
    setTrueValue(0);
    setLevel(level + 1);
    setOpenPopup(false);
  };
  const handleOkPopup = () => {
    if(leftTimeForPopup === 0)
    {
    setFalseValue(0);
    setTrueValue(0);
    setLevel(0);
    setOpenPopup(false);
    getWords();
    }else {
    setFalseValue(0);
    setTrueValue(0);
    setLevel(level + 1);
    setOpenPopup(false);
    getWords();
  }
  };

  return openPopup ? (
    <div className="popup">
      <div className="popup-inner">
        {falseValue > 0 && trueValue > 0 && initialValue > 0 ? (
          <>
            <text>{`Zaman bitti`}</text> <br/>
            <text>{`Doğru kelime: ${trueValue}`}</text> <br/>
            <text>{`Yanlış kelime: ${falseValue}`}</text> <br/>
            <text>{`Boş kelime: ${initialValue}`}</text> <br/>
          </>
        ) : falseValue > 0 && trueValue > 0 && initialValue === 0 ? (
          <>
            <text>{`Kalan zaman: ${leftTimeForPopup} saniye`}</text> <br/>
            <text>{`Doğru kelime: ${trueValue}  `}</text> <br/>
            <text>{`Yanlış kelime: ${falseValue}  `}</text> <br/>
          </>
        ) : falseValue > 0 && trueValue === 0 && initialValue > 0 ? (
          <>
            <text>{`Zaman bitti`}</text> <br/> 
            <text>{`Hiçbir doğru kelime yazmadınız`}</text> <br/>
            <text>{`Yanlış kelime: ${falseValue}  `}</text> <br/>
            <text>{`Boş kelime: ${initialValue}  `}</text> <br/>
          </>
        ) : falseValue > 0 && trueValue === 0 && initialValue === 0 ? (
          <>
            <text>{`Kalan zaman: ${leftTimeForPopup} saniye`}</text> <br/>
            <text>{`Tüm kelimeleri yanlış yazdınız`}</text> <br/>
          </>
        ) : falseValue === 0 && trueValue > 0 && initialValue > 0 ? (
          <>
            <text>{`Zaman bitti`}</text> <br/>
            <text>{`Doğru kelime: ${trueValue}  `}</text> <br/>
            <text>{`Boş kelime: ${initialValue}  `}</text> <br/>
          </>
        ) : falseValue === 0 && trueValue > 0 && initialValue === 0 ? (
          <>
            <text>{`Kalan zaman: ${leftTimeForPopup} saniye`}</text> <br/>
            <text>{`Tüm kelimeler doğru, Tebrikler! `}</text> <br/>
          </>
        ) : falseValue === 0 && trueValue === 0 && initialValue > 0 ? (
          <>
            <text>{`Zaman bitti`}</text> <br/>
            <text>{`Tüm kelimeleri boş bıraktınız`}</text> <br/>
          </>
        ) : (
          ""
        )}
        {leftTimeForPopup !== 0 ?(
        <Button className="close-btn" onClick={handleClosePopup}>
          Kapat
        </Button>
        ):""}
        <Button className="ok-btn" onClick={handleOkPopup}>

          {leftTimeForPopup === 0 ? "Tekrar dene" : "Devam Et"}
        </Button>
        
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
