import React, { useState } from "react";
import { ContactItem } from "../components/ContactItem/ContactItem";
import "./ContactMainPage.style.scss";
import AddItem from "../components/AddContact/AddContact";

const data = [
  { id: 1, name: "Harry", phone: "0412667898" },
  { id: 2, name: "Peter", phone: "0412323222" },
  { id: 3, name: "John", phone: "0412678933" },
  { id: 4, name: "Tom", phone: "0412667898" },
  { id: 5, name: "Anna", phone: "0412667898" },
  { id: 6, name: "Anita", phone: "0412667898" },
  { id: 7, name: "Kevin", phone: "0412667898" },
];

export const ContactMainPage = () => {
  const [contactData, setContactData] = useState(data);
  const [search, setSearch] = useState("");

  const addItem = (name, phone) => {
    const newItem = { id: contactData.length + 1, name: name, phone: phone };
    const newArray = [];
    contactData.forEach((item) => {
      newArray.push(item);
    });
    newArray.push(newItem);
    setContactData(newArray);
    setSearch(newArray);
  };

  const deleteItem = (id) => {
    setContactData(contactData.filter((item) => item.id !== id));
    setSearch(search.filter((item) => item.id !== id));
  };
  const editItem = (name, phone, id) => {
    const newContactData = [];
    contactData.map((item) => {
      if (item.id === id) {
        newContactData.push({
          id: item.id,
          name: name,
          phone: phone,
        });
      } else {
        newContactData.push(item);
      }
    });
    setContactData(newContactData);
    setSearch(newContactData);
  };
  const handleSearch = (value) => {
    setSearch(contactData.filter((item) => item.name.includes(value)));
  };

  return (
    <div className="main-page-wrapper">
      <div className="main-page-title">Contact List</div>

      <ul className="main-page-content">
        <div className="main-function">
          <AddItem addItem={addItem} />
          <div className="user-search">
            <input
              type="text"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        
        {(search ? search : contactData)?.map((item) => {
          return (
            <ContactItem
              key={item.id}
              contactElement={item}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          );
        })}
      </ul>
    </div>
  );
};
