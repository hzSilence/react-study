import React, { Component } from 'react'

class InputNumber extends Component{
  constructor(props){
    super(props);
    this.state = {
      //根据是否传递value来判断是否为受控组件
      isControlled: props.value ? true : false,
      controlledValue: props.value || "",
      unControlledValue: props.defaultValue || ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      controlledValue: e.target.value
    })
  }

  handleSubmit(event) {
    this.setState({
      unControlledValue: this.input.value
    })
    event.preventDefault();
  }

  
  render(){
    let {controlledValue, unControlledValue, isControlled} = this.state;
    let controlledComponent = (
      <div>
        <h1>受控组件：{controlledValue}</h1>
        <input type="text" value={this.state.controlledValue} onChange={ e=> this.handleChange(e)}/>
      </div>
    )
    let unControlledComponent = (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>非受控组件：{unControlledValue}</h1>
        </div>
        <input type="text" ref={(input) => this.input = input}/>
        <button type="submit">点击执行</button>
      </form>
    );
    return (
      <div>
        {isControlled ? controlledComponent : unControlledComponent}
      </div>
    )
  }
}

export default InputNumber;