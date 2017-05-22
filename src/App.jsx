import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class App extends Component {
  onAddCount = () => {
    // this.props.appState.count++
    this.props.appState.addCount();
  }
  changeNameHandler = () => {
    this.props.appState.obj.name = "mobx" + Math.random()
  }
  changeTypeHandler = () => {
    // this.props.appState.time = "no webapp"
  }
  componentDidMount() {
    this.getTimestamp();
  }
  getTimestamp = () => {
    this.props.appState.ajaxTimestamp()
  }
  onReset = () => {
    // this.props.appState.resetTimer();
    console.log(this.props.appState.obj.count)
  }

  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          难度: {this.props.appState.obj.count}
        </button>
        <div>{this.props.appState.obj.name}很难学</div>
        <button onClick={this.changeNameHandler}>改变name值</button>
        <div onClick={this.getTimestamp}>
          {this.props.appState.time}
        </div>
        <button onClick={this.onAddCount}>点击加10</button>
        <DevTools />
      </div>
    );
  }


};
