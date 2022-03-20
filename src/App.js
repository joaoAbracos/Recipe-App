import React from 'react';
import './App.css';
import {Route , Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import CreateRecipeRedux from './components/CreateRecipeRedux';
import Recipes from './components/Recipes';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
        <Routes>
          <Route path={'/'} element={<Recipes/>}/>
          <Route path={'/createrecipe'} element={<CreateRecipeRedux/>}/>
          <Route path={'/recipes'} element={<Recipes/>}/> 
        </Routes>
    </React.Fragment>
  );
}

export default App;
