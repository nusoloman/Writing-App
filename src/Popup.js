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
}) {
  const handleClosePopup = () => {
    setFalseValue(0);
    setTrueValue(0);
    setLevel(level + 1);
    setOpenPopup(false);
  };
  const handleOkPopup = () => {
    setFalseValue(0);
    setTrueValue(0);
    setLevel(level + 1);
    setOpenPopup(false);
    getWords();
  };

  return openPopup ? (
    <div className="popup">
      <div className="popup-inner">
        {falseValue > 0 && trueValue > 0 && initialValue > 0 ? (
          <>
            <h2>{`${trueValue} kelime doğru `}</h2>
            <h2>{`${falseValue} kelime yanlış `}</h2>
            <h2>{`${initialValue} kelime boş `}</h2>
          </>
        ) : falseValue > 0 && trueValue > 0 && initialValue === 0 ? (
          <>
            <h2>{`${trueValue} kelime doğru `}</h2>
            <h2>{`${falseValue} kelime yanlış `}</h2>
          </>
        ) : falseValue > 0 && trueValue === 0 && initialValue > 0 ? (
          <>
            <h2>{`Hiçbir doğru kelime yazmadınız`}</h2>
            <h2>{`${falseValue} kelime yanlış `}</h2>
            <h2>{`${initialValue} kelime boş `}</h2>
          </>
        ) : falseValue > 0 && trueValue === 0 && initialValue === 0 ? (
          <>
            <h2>{`Tüm kelimeleri yanlış yazdınız`}</h2>
          </>
        ) : falseValue === 0 && trueValue > 0 && initialValue > 0 ? (
          <>
            <h2>{`${trueValue} kelime doğru `}</h2>
            <h2>{`${initialValue} kelime boş `}</h2>
          </>
        ) : falseValue === 0 && trueValue > 0 && initialValue === 0 ? (
          <>
            <h2>{`Tüm kelimeler doğru, Tebrikler! `}</h2>
          </>
        ) : falseValue === 0 && trueValue === 0 && initialValue > 0 ? (
          <>
            <h2>{`Tüm kelimeleri boş bıraktınız`}</h2>
          </>
        ) : (
          ""
        )}
        <Button className="close-btn" onClick={handleClosePopup}>
          Kapat
        </Button>
        <Button className="ok-btn" onClick={handleOkPopup}>
          Devam Et
        </Button>
        -
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
