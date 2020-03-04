import React from 'react';
import './App.css';
import Axios from 'axios'

class App extends React.Component {
  state={
    count:0,
  }
  incFun = () => {
    const updatedState = this.state.count + 1;
    this.setState({ count: updatedState })
  }
  decFun = () => {
    const updatedState = this.state.count - 1;
      this.setState({count: updatedState})
  }
  componentDidMount(){
    Axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log("error");
    })
  }
  render()   {
    return (
      <div className="wrapper" >
        <div>
          <h1 className="count">{this.state.count}</h1>
        </div>
        <div className="buttons">
          <button className="inc" onClick={this.incFun}>Increment +1</button>
          <button className="dec" onClick={this.decFun}>Decrement -1</button>
        </div>
      </div>
    );
  } 

}

export default App;
