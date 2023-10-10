import { useEffect, useState } from "react";
import "./App.css";
import { apiContainers } from "./apis/api";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { setAnimation, showContainer } from "./javascriptLogic";
import { AddRow } from "./components/addRow";
// react-select
import Select from "react-select";
import makeAnimated from "react-select/animated";
setTimeout(() => {
  showContainer();
}, 100);
function App() {
  const [dataApiContainers, setDataApiContainers] = useState(apiContainers);
  const [changeData, setChangeData] = useState(false);

  const animatedComponents = makeAnimated();
  useEffect(() => {
    console.log(dataApiContainers);
    setAnimation(dataApiContainers);
  }, [dataApiContainers]);

  const [options, setOptions] = useState([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "+", label: "+" },
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setChangeData(!changeData);
  }, [options]);

  const handleChangeSelect = (e) => {

    setSelectedOptions(e);

  };

  const formatOptionLabel = ({ value, label, customAbbreviation }) => (
    <div style={{ display: "flex" }}>
      <div>{label}</div>
      <div style={{ marginLeft: "10px", color: "#ccc" }}>
        {customAbbreviation}
      </div>
    </div>
  );

  return (
    <>
      <AddRow
        dataApiContainers={dataApiContainers}
        setDataApiContainers={setDataApiContainers}
      />
      <div className="global__container">
        {dataApiContainers.map((item, key) => {
          return (
            <div className="container" key={key}>
              <div className="container__header">
                <div className="container__arrow" nonce={0}>
                  <AiFillCaretRight />
                </div>
                <p>{item.title}</p>
              </div>
              <div className="container__value">
                <h1>${item.value}</h1>
              </div>
              <div className="container__show">
                <Select
                  components={animatedComponents}
                  options={options}
                  isMulti
                  onChange={(e) => {
                    handleChangeSelect(e);
                    console.log(e);
                  }}
                  hideSelectedOptions={false}
                  isClearable={true}
                  isOptionSelected={false}
                  closeMenuOnSelect={false}
                />
                <div className="container__footer">
                  <AiOutlinePlus /> <p>Add Time Segment</p>
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
