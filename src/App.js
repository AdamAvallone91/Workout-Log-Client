import React, { Component } from 'react';
import SiteBar from './home/Navbar';
import React, {useState, useEffect} from 'react';
import React from 'react';
import Auth from './auth/Auth';

function App() {
  const [sessionToken, setSessionToken] = useState(''); //1
useEffect(() => { //2
if (localStorage.getItem('token')){
setSessionToken(localStorage.getItem('token'));
}
}, [])
const updateToken = (newToken) = > { //3
localStorage.setItem('token', newToken);
setSessionToken(newToken);
console.log(sessionToken);
}
//render method is down here 
  return (
  <div>
  <Sitebar/>
  </div>
  );
  }