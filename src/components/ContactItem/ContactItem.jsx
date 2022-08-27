import React, { useState } from "react";
export const ContactItem = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState(0);
  const [open, setOpen] = useState(false);

  const { contactElement, deleteItem, editItem } = props;
  return (
    <>
      <li key={contactElement.id}>
        <div className="user-left">
          <div
            className="user-name-letter"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {contactElement.name.charAt(0).toUpperCase()}
          </div>
          <div className="user-name">{contactElement.name}</div>
          {isEdit && (
            <input
              className="edit-input"
              type="text"
              placeholder={contactElement.name}
              onChange={(e) => setNewName(e.target.value)}
            />
          )}
          {isEdit && (
            <input
              className="edit-input"
              type="number"
              placeholder={contactElement.phone}
              onChange={(e) => setNewPhone(e.target.value)}
            />
          )}
          {isEdit && (
            <button
              onClick={() => {
                editItem(newName, newPhone, contactElement.id);
                setIsEdit(false);
              }}
            >
              save
            </button>
          )}
        </div>
        <div className="user-right">
          <div className="user-edit">
            <button onClick={() => setIsEdit(!isEdit)}>edit</button>
          </div>
          <div className="user-delete">
            <button onClick={() => deleteItem(contactElement.id)}>
              delete
            </button>
          </div>
        </div>
      </li>
      {/* {open&&<div>Name:{contactElement.name},Phone:{contactElement.phone}<span onClick={()=>setOpen(false)}>x</span></div>} */}
      {open && (
        <div className="showlist" onClick={() => setOpen(false)}>
          <span className="showName">Name:{contactElement.name}</span>
          <span className="showPhone">Phone:{contactElement.phone}</span>
        </div>
      )}
    </>
  );
};
