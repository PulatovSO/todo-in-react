import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default function Todo() {
  const [Items, setItems] = useState([]);
  const [Item, setItem] = useState({title: ''});

  const AddItem = (e) => {
    e.preventDefault()
    const newItem = { title: Item.title }
    if (Item.title != '') setItems([...Items, newItem])
    setItem({title: ''})
  }

  return (
    <>
      <form>
        <TodoInput 
          onChange={e => setItem({...Item, title: e.target.value})}
          value={Item.title}
          placeholder={"Add item..."} />
        <button 
          onClick={AddItem}
          className="add-btn">
          Add
        </button>
      </form>

      <div className="wrap">
        {Items.map((item) => (
          <TodoItem
            title={item.title}
          />
        ))}
      </div>
    </>
  );
}


