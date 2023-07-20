import React, {createContext, useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';

// interface UserContextType {
//   name:string;
//   username:string;
//   password:string;
//   setName: (name:string) => void;
//   setUsername: (username:string) => void;
//   setPassword: (password:string) => void;
// }
// const UserContext = createContext<UserContextType>({
//   name:"",
//   username:"",
//   password:"",
//   setUsername: () => {},
//   setPassword: ()=>{}
// });

function App() {
  
  return (
    <div className="App">
      <div className="App-header">
        <Login/>
      </div>
    </div>
  );
}

export default App;
