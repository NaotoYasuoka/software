import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count:0};
    this.countUp = this.countUp.bind(this);
    this.clear = this.clear.bind(this);
  }

  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div>Hello World!</div>
        <div>クリックされた回数={this.state.count}</div>
        <Button onClick={() => this.countUp(1)}>1</Button>
        <Button onClick={() => this.countUp(2)}>2</Button>
        <Button onClick={() => this.countUp(3)}>3</Button>
        <Button onClick={() => this.countUp(4)}>4</Button>
        <Button onClick={() => this.countUp(5)}>5</Button>
        <Button onClick={() => this.countUp(6)}>6</Button>
        <Button onClick={() => this.countUp(7)}>7</Button>
        <Button onClick={() => this.countUp(8)}>8</Button>
        <Button onClick={() => this.countUp(9)}>9</Button>
        <Button onClick={() => this.countUp(0)}>0</Button>
        <Button onClick={this.clear}>C</Button>
      </Page>
    );
  }

  clear(){
    this.setState({count: 0}); 
  }

  countUp(value){
    var sum = this.state.count*10+value;
    var num = sum;
    // {(() => {
    let i=0;
    for(; parseInt(num, 10) != 0; i++){
      num = Number(num) / 10;
    }
    if ( i < 9 ) {
      this.setState({count: sum});     
    } else {
      alert("(￣∇￣;)ハッハッハ もう追加できないんだなー");
    }
    // })()}
  }
}