import React from 'react';

import './App.css';

import USA from './USA'

import votes from './votes';

const colors = ['red', 'blue', 'green'];

class App extends React.Component {

  state = {
    reds: 0,
    blues: 0,
    greens: 0,
  }

  changeStateColor = (event)=>{
    console.log(event.target.id);

    const oldColor = this.state[event.target.id];
    const oldIndex = colors.indexOf(oldColor);
    const newIndex = (oldIndex + 1) % colors.length;
    const newColor = colors[newIndex];

    this.setState({
      [event.target.id]: newColor,
    }, this.calculateVotes);
  }

  calculateVotes =()=>{
    // console.log("blah");
    let reds = 0;
    let blues = 0;
    let greens = 0;

    const stateCodes = Object.keys(votes);
    for(let i = 0; i < (stateCodes.length); i++){
      const stateCode = stateCodes[i];
      const stateColor = this.state[ stateCode];
      const stateVotes = votes[stateCode];

      if(stateColor === 'red'){
        reds += stateVotes;
      }else if (stateColor === 'blue'){
        blues += stateVotes;
      }else if (stateColor === 'green'){
        greens += stateVotes;
      }

    }

    this.setState({ reds, greens, blues });
  }



  render(){
  return (
    <div className="App">

     <USA colors = {this.state} onClick={this.changeStateColor} />

     <div className='votes'>

      <span> Republicans: {this.state.reds} </span>

      <span> Democrats: {this.state.blues} </span>

      <span> Wasted Votes: {this.state.greens} </span>

     </div>

    </div>
  );
 }

}

export default App;
