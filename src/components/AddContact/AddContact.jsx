import React, { useState } from "react";

const AddItem = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="add-user">
      <div>
        <input
          id="name"
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          id="phone"
          type="number"
          placeholder="phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button
          onClick={() => {
            props.addItem(name, phone);
            document.getElementById('name').value='';
            document.getElementById('phone').value='';
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddItem;
