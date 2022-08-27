import React, { useState } from "react";
export const ContactItem = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState(0);

  const { contactElement, deleteItem, editItem } = props;
  return (
    <li key={contactElement.id}>
      <div className="user-left">
        <div className="user-name-letter">
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
          <button onClick={() => deleteItem(contactElement.id)}>delete</button>
        </div>
      </div>
    </li>
  );
};
