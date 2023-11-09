import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import React, {useState} from "react";
import LightBox from "./components/LightBox";
import { data } from './data'

function App() {
  const [count, setCount] = useState(0)
  const [lightBox, setLightBox] = useState(false)
  const [products] = useState(data)
  const [value, setValue] = useState(0)
  const [addCart, setAddCart] = useState(false)
  
  const {Image} = products[value]

  const thumbnails = products.map((item, index) => (
    <img src={item.thumbnail} alt="" key={item.id} onClick={() => setValue(index)}/>
  ))         

  function Next() {
    setValue(prevValue => prevValue + 1)
    if (value > 2) {
      setValue(0) 
    } 
  }

  function Prev() {
    setValue(prevValue => prevValue - 1)
    if (value < 1) {
      setValue(3) 
    }
  }

  function Minus() {
    setCount(count - 1)
    if(count === 0){
      setCount(0)
    }
  }

  function Add() {
    setCount(count + 1)
  }

  function handleDel() {
    setCount(0)
  }

  function open() {
    setLightBox(true)
  }

  function close() {
    setLightBox(false)
  }

  function addToCart() {
    setAddCart(true)
  }

 

  return (
    <div> 
        <NavBar 
          addCart={addCart}
          count={count}
          empty={handleDel}
        />
        <LightBox 
            lightBox={lightBox}
            close={close}
            Image={Image}
            Prev={Prev}
            Next={Next}
            thumbnails={thumbnails}
        />
        <div className="heroShop">
          <Hero
            open={open} 
            Image={Image}
            Prev={Prev}
            Next={Next}
            thumbnails={thumbnails}
          />
          <Shop 
            addToCart={addToCart}
            count={count}
            Add={Add}
            Minus={Minus}
          />
        </div>
    </div>
  );
}

export default App;
