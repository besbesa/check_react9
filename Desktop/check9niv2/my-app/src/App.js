import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {count:0}
  tab=[0,1,2,3,4,5,6,7,8,9,10];
  next(){
    this.setState({ count: this.state.count + 1})
  }

  fact(nbr){
    return nbr*nbr;
  }
  render() {
    return (
      <div className="App">
        <button onClick={()=>this.next()}>ok</button>
        <p>the factorial of {this.state.count} is {this.fact(this.state.count)} </p>
        {this.tab.map((item)=>{
          return (<button onClick={()=>this.setState({count:item})}>{item}</button>)
        })}
      </div>
    );
  }
}

export default App;
