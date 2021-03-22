import React, { useState } from 'react';
import './App.css';
import pic from "./head.png"
import {Item} from "./components/Item/index.tsx"
import {Input} from "./components/Input/index.tsx"

function App() {
  const [itemList, setItemList] = useState([])
  const onSubmit = (content) => {
    const newItemList = [
      ...itemList,
      {
        content,
        id: (new Date())*1000,
      }
    ];
    setItemList(newItemList);
  }
  const handleDelete = (id) => {
    const newList = itemList.filter((item) => item.id !== id)
    setItemList(newList)
  }
  const handleCheck = (target) => {
    const id = target.id
    let newList = [];
    if (target.isChecked) {
      newList = itemList.filter((item) => item.id !== id);
      newList.push(target)
    } else {
      newList = itemList.filter((item) => item.id !== id);
      newList.unshift(target)
    
    }
    setItemList(newList)
  
  }
 
  return (
    <div className="App">
     <img src={pic} />
     <h1>Todo List</h1>
     <Input 
        handleSubmit={(content) => onSubmit(content)}
      />
     {itemList.map((item, key) => {
        return (
          <Item 
          { ...item} 
          key={item.id}
          onDelete={(e, id) => handleDelete(id)}
          onCheck={(target) => handleCheck(target)}
          />
        )
      }
     )}
    </div> 
  );
}

export default App;
