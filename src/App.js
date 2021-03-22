import React, { useState } from 'react';
import './App.css';
import normal from "./normal.png"
import wink from "./wink.png"
import happy from "./happy.png"

import { Item } from "./components/Item/index.tsx"
import { Input } from "./components/Input/index.tsx"


function App() {
  const [itemList, setItemList] = useState([])
  const [img, setImg] = useState(normal);
  const onAdd = (content) => {
    const newItemList = [
      ...itemList,
      {
        content,
        id: (new Date())*1000,
      }
    ];
    setImg(normal);
    setItemList(newItemList);
  }
  const handleDelete = (id) => {
    const newList = itemList.filter((item) => item.id !== id);
    setImg(normal);
    setItemList(newList)
  }
  const handleCheck = (target) => {
    const id = target.id
    let newList = [];
    if (target.isChecked) {
      newList = itemList.filter((item) => item.id !== id);
      newList.push(target)
      setImg(wink)
    } else {
      newList = itemList.filter((item) => item.id !== id);
      newList.unshift(target)
    }
    let allChecked = true;
    newList.forEach((item) => {
      if (!item.isChecked){
        allChecked = false;
      }
    })
    if (allChecked) {
      setImg(happy)
    }
    setItemList(newList)
  
  }
 
  return (
    <div className="App">
     <img src={img} />
     <h1>Todo List</h1>
     <Input 
        handleSubmit={(content) => onAdd(content)}
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
