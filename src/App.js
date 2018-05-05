import React from 'react';
// import { Route } from './C:/Users/Vanni Kotiyaa/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

const App = () => <div className = "ui container">

  <Route path ="/" exact component = {HomePage}/>
  <Route path ="/login" exact component = {LoginPage}/>

</div>;
export default App;
