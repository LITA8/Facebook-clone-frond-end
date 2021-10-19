import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import MessageSender from './MessageSender';
import Post from './Post';
import Widgets from './Widgets';
import Login from './Login';
function App() {
  // partie de la base de donnée
  //user est null
  const user='abdel';
  return (
    <div className="app">
      {/* s'il ya pas d'user
     fait ceci(affiche la page de connexion) */}
      {!user ? ( 
        <Login />
        )    : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        {/*App body*/}
        {/*Sidebar*/}
        {/*Feed*/}
        {/*widgets*/}
        </div>
        </>
      )} 

    </div>
  );
}

export default App;
