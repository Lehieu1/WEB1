import React, { useState } from 'react';
import './App.css';
import data from './Components/data'
import Menu from './Components/Menu'
import Categlory from './Components/Categlory';

function App(props) {

  const [MenuItems, setMenuItems] = useState(data);
  const HandleMenu = categlory => {
    if (categlory === "all") {
      setMenuItems(data);
    }
    else {
      const newMenu = data.filter(item => item.category === categlory)
      setMenuItems(newMenu)
    }
  }
  return (
    <div className="container">
      <h1 className="title-menu">MENU</h1>
      <Categlory Change={HandleMenu} />
      <Menu menu={MenuItems} />
    </div>
  );
}

export default App;