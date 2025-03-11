import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const sum= 7+3
const year=2025
const image= "https://picsum.photos/200"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 class='heading' contentEditable="true" >Random photos</h1>
    <img src={image + "?greyscale"} alt="Random Image" />
  </div>
);

