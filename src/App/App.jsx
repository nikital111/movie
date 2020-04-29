import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Search from '../components/Movies/Search/Search';
import List from "../components/Movies/List/List"

function App() {
  return (
    <div className="main">
   <Header />
   <Search />
   <List />
   </div>
  );
}

export default App;
