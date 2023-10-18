import { useEffect, useState } from "react";
import "./App.css";
import { apiContainers } from "./apis/api";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import {
  setAnimation,
  showAddRow,
  showContainer,
  showDate,
} from "./javascriptLogic";
import { AddRow } from "./components/AddRow.jsx";
// react-select
import Select from "react-select";
import makeAnimated from "react-select/animated";

setTimeout(() => {
  showContainer();
  showDate();
  showAddRow();
}, 100);

function App() {
  const [dataApiContainers, setDataApiContainers] = useState(apiContainers);
  const [changeData, setChangeData] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [newArrowAdded, setNewArrowAdded] = useState(false);

  useEffect(() => {
    if (newArrowAdded) {
      setAnimation(dataApiContainers);
      setNewArrowAdded(!newArrowAdded);
    }
  }, [newArrowAdded]);

  useEffect(() => {
    if (sessionStorage.getItem("welcome")) {
      setShowWelcome(sessionStorage.getItem("welcome"));
    }
  }, []);

  setTimeout(() => {
    sessionStorage.setItem("welcome", false);
  }, 1000);

  const animatedComponents = makeAnimated();

  const [options, setOptions] = useState([
    { value: 1.35, label: "Actual Adspend" },
    { value: 2.25, label: "Monthly Ad Spend" },
    { value: 3.15, label: "Actual Website Traffic" },
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setChangeData(!changeData);
  }, [options]);

  const handleChangeSelect = (e) => {
    setSelectedOptions(e);
  };

  return (
    <>
      {showWelcome === true && (
        <>
          <div className="welcome">
            <div className="welcome__letters">
              <div className="w">W</div>
              <div className="e">E</div>
              <div className="l">L</div>
              <div className="c">C</div>
              <div className="o">O</div>
              <div className="m">M</div>
              <div className="e2">E</div>
            </div>
          </div>
        </>
      )}

      <AddRow
        dataApiContainers={dataApiContainers}
        setDataApiContainers={setDataApiContainers}
        setNewArrowAdded={setNewArrowAdded}
        newArrowAdded={newArrowAdded}
      />
      <div className="global__container">
        {dataApiContainers.map((item, key) => {
          return (
            <div className="container" key={key} id={`container__${key}`}>
              <div className="container__header">
                <div className="container__arrow" nonce={0}>
                  <AiFillCaretRight />
                </div>
                <p>{item.title}</p>
              </div>
              <div className="container__value">
                <h1>${item.value.toFixed(2)}</h1>
              </div>
              <div className="container__show">
                <Select
                  components={animatedComponents}
                  options={options}
                  isMulti
                  onChange={(e) => {
                    handleChangeSelect(e);
                    item.value = 0;
                    e.map((item2) => {
                      item.value = item.value + item2.value;
                    });
                  }}
                  hideSelectedOptions={false}
                  isClearable={true}
                  isOptionSelected={false}
                  closeMenuOnSelect={false}
                />
                <div className="container__footer">
                  <a
                    href={`#container__${key}`}
                    className="showDates"
                    nonce={0}
                  >
                    <AiOutlinePlus /> <p>Add Time Segment</p>
                  </a>
                  <div className="container__footer__dates">
                    <p>From: </p>
                    <input type="date" />
                    <p>To: </p>
                    <input type="date" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
