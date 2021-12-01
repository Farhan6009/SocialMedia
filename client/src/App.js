import React, { useState } from 'react'
import "./App.css"
import todo from "./Component/images/2666505.png";
import List from './Component/List';
import Input from "./Component/Input"
// import headimg from "../public/images/2666505.png"

const App = () => {
  const [item, setitem] = useState([]);
  const [state, setstate] = useState(false)
  const [id, setid] = useState("")
  return (
    <>
      <div className="container">
        <img src={todo} alt="listimg" className="topimg" />
        <h3>Add your List Items here</h3>
        <Input setitem={setitem} item={item} state={state} setstate={setstate} id={id} ></Input>
        <List setitem={setitem} setstate={setstate} setid={setid} ></List>
      </div>
    </>
  )

}

export default App;