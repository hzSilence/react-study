import React, { Component } from 'react'
import { unmountComponentAtNode } from 'react-dom';
import '../assets/css/modal.css';

class App extends Component{
  constructor(props){
    super(props);
  }
  remove(){
    let app = document.getElementById("app");
    unmountComponentAtNode(app);
    app.parentNode.removeChild(app)
  };
  confirm(){
    this.props.ok(true);
    this.remove();
  };
  cancle(){
    this.props.ok(false);
    this.remove();
  }
  render(){
    return (
      <div className="wrap">
        <div className="modal">
          <div className="modal__mask"></div>
          <div className="modal__box">
            <div className="modal__content">
              <div>{this.props.text}</div>
            </div>
            <div className="modal__footer">
              <div className="modal__footer__confirm" onClick={this.confirm.bind(this)}>确定</div>
              <div className="modal__footer__cancle" onClick={this.cancle.bind(this)}>取消</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;