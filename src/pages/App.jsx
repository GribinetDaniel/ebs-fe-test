import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import MyContextProvider from 'context/MyContext';

function App() {


    return (
      <MyContextProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </MyContextProvider>
    );
}

export default App;