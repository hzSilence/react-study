import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

const confirm = (name) => {
  var div = document.createElement('div');
  div.setAttribute("id","app");
  document.body.appendChild(div);
  return new Promise((resolve,reject)=>{
    ReactDOM.render(<Modal ok={resolve} text={name}/>,document.getElementById('app'));
  });
}

export {confirm};