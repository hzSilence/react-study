import React, { Component } from 'react';
import {confirm} from './Confirm';


class App extends Component{
  constructor(props){
    super(props);
  }
  async componentDidMount(){
    let res = await confirm("确定删除吗？");
    if(res){
      console.log("是");
    }else{
      console.log("否");
    }
  }
  render(){
    return (
      <div>
        <h1>Confirm组件</h1>
      </div>
    )
  }
}

export default App;