import React, { useEffect, useState } from "react";
import "./addRow.css";
import { AiOutlinePlus } from "react-icons/ai";

export const AddRow = ({
  dataApiContainers,
  setDataApiContainers,
  setNewArrowAdded,
  newArrowAdded,
}) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault;
    if (title.length > 0) {
      setDataApiContainers([...dataApiContainers, { title, value: 0 }]);
      setError(false);
      setTitle("");
      setNewArrowAdded(!newArrowAdded);
    } else {
      setError(true);
      setTitle("");
    }
  };

  return (
    <div className="addRow_container">
      {error ? (
        <>
          <p
            style={{ background: "#FF0000AA", padding: "5px", color: "white" }}
          >
            Row not inserted!, please insert a title.
          </p>
        </>
      ) : (
        <></>
      )}
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
          placeholder="Insert title"
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
