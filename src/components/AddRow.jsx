import React, { useState } from "react";
import "./addRow.css";
import { AiOutlinePlus } from "react-icons/ai";
import { showAddRow } from "../javascriptLogic";

setTimeout(() => {
  showAddRow();
}, 100);
export const AddRow = ({ dataApiContainers, setDataApiContainers }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault;
    console.log("hello");
    setDataApiContainers([...dataApiContainers, { title, value: 0 }]);
  };

  return (
    <div className="addRow_container">
      <button className="buttonShow">
        <AiOutlinePlus />
        <p>addRow</p>
      </button>
      <form className="formData" nonce="0">
        <input
          type="text"
          id="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="button"
          id="submit"
          value={"Guardar"}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
