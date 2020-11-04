import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const commands = {
  "help": (inp)=>{return {output:"Enter commands like\nResume\nAbout"}},
  "about": (inp)=>{return {output:"I m pratik Gupta.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}},
};

ReactDOM.render(
  <React.StrictMode>
    <App commands={commands} invalidOutput="Please enter a valid command"/>
  </React.StrictMode>,
  document.getElementById('root')
);

