import React, { useEffect,useState } from "react";
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
  endOfGame,
  setEndOfGame,
}) {
  const [point, setPoint] = useState(0);

  const handleOkPopup = () => {
    if(endOfGame){
      return(
      setFalseValue(0),
      setTrueValue(0),
      setLevel(0),
      setOpenPopup(false),
      setEndOfGame(false),
      setPoint(0)
      )
      
    }
    if(leftTimeForPopup === 0)
    {
    setFalseValue(0);
    setTrueValue(0);
    setLevel(0);
    setOpenPopup(false);
    setPoint(0);
    getWords();
    }else {
    setFalseValue(0);
    setTrueValue(0);
    setLevel(level + 1);
    setOpenPopup(false);
    getWords();
  }
  };

  const handlePoint = () => {
    let p = trueValue * 4 - falseValue * 2 + leftTimeForPopup*0.25;
    setPoint(point+p);
  }

  useEffect(() => {
    if (openPopup){
    handlePoint();
  }
  }, [openPopup]);

  useEffect(() => {
    if (openPopup){
      document.getElementById("ok").focus();
  }
  }, [openPopup]);



  return openPopup ? (
    <div className="popup">
      <div className="popup-inner">

        {endOfGame ? (
          <>
          <h1>{`TEBRİKLER!\n Oyun bitti`}</h1><br/>
          <h2>{`PUANINIZ: ${point}`}</h2> 
          </>
        ) : falseValue > 0 && trueValue > 0 && initialValue > 0 ? (
          <>
            <text style={styles.time}>{`Zaman bitti`}</text> <br/>
            <text style={styles.true}>{`Doğru kelime: ${trueValue}`}</text> <br/>
            <text style={styles.false}>{`Yanlış kelime: ${falseValue}`}</text> <br/>
            <text style={styles.initial}>{`Boş kelime: ${initialValue}`}</text> <br/>
            <h2>{`PUAN: ${point}`}</h2> <br/>
          </>
        ) : falseValue > 0 && trueValue > 0 && initialValue === 0 ? (
          <>
            <text style={styles.time}>{`Ekstra zaman: ${leftTimeForPopup} saniye`}</text> <br/>
            <text style={styles.true}>{`Doğru kelime: ${trueValue}  `}</text> <br/>
            <text style={styles.false}>{`Yanlış kelime: ${falseValue}  `}</text> <br/>
            <h2>{`PUAN: ${point}`}</h2> <br/>
          </>
        ) : falseValue > 0 && trueValue === 0 && initialValue > 0 ? (
          <>
            <text style={styles.time}>{`Zaman bitti`}</text> <br/> 
            <text style={styles.false}>{`Yanlış kelime: ${falseValue}  `}</text> <br/>
            <text style={styles.initial}>{`Boş kelime: ${initialValue}  `}</text> <br/>
            <h2>{`PUAN: ${point}`}</h2> <br/>
          </>
        ) : falseValue > 0 && trueValue === 0 && initialValue === 0 ? (
          <>
            <text style={styles.time}>{`Ekstra zaman: ${leftTimeForPopup} saniye`}</text> <br/>
            <text style={styles.false}>{`Tüm kelimeleri yanlış yazdınız`}</text> <br/>
            <h2>{`PUAN: ${point}`}</h2> <br/>
          </>
        ) : falseValue === 0 && trueValue > 0 && initialValue > 0 ? (
          <>
            <text style={styles.time}>{`Zaman bitti`}</text> <br/>
            <text style={styles.true}>{`Doğru kelime: ${trueValue}  `}</text> <br/>
            <text style={styles.initial}>{`Boş kelime: ${initialValue}  `}</text> <br/>
            <h2>{`PUAN: ${point}`}</h2> <br/>
          </>
        ) : falseValue === 0 && trueValue > 0 && initialValue === 0 ? (
          <>
            <text style={styles.time}>{`Ekstra zaman: ${leftTimeForPopup} saniye`}</text> <br/>
            <text style={styles.true}>{`Tüm kelimeler doğru, Tebrikler! `}</text> <br/>
            <h2>{`PUAN: ${point}`}</h2> <br/>
          </>
        ) : falseValue === 0 && trueValue === 0 && initialValue > 0 ? (
          <>
            <text style={styles.time}>{`Zaman bitti`}</text> <br/>
            <text style={styles.initial}>{`Tüm kelimeleri boş bıraktınız`}</text> <br/>
            <h2>{`PUAN: ${point}`}</h2> <br/>
          </>
        ) : (
          ""
        )}

        <Button className="ok-btn" id="ok" onClick={handleOkPopup}>

          {leftTimeForPopup === 0 ? "Tekrar dene" : "Devam Et"}
        </Button>
        
      </div>
    </div>
  ) : (
    ""
  );
}
const styles = {
  true: {
    color: 'green',
    fontSize: 20,

  },
  false: {
    color: 'red',
    fontSize: 20,

  },
  initial: {
    color: 'black',
    fontSize: 20,

  },
  time: {
    color: 'black',
    fontSize: 20,

  }}

export default Popup;

