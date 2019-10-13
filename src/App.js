import React from 'react';
import './App.css';
import {State, StateHeader} from './States'
import {PersonIndex} from './Persons'

class App extends React.Component {
  
   constructor(props) {
        super(props);

        this.state = {
            result: {},
            jsonUrl: "bundesland.json",
            stateList: [],
            personIndexCounts: []
        }
    }
    
        stateClicked(e, number, context) {
        e.preventDefault();
         window.location.href = context.state.stateList[number].url;
}

  getListOfStates(url) {
      console.log('loading ' + url);
        fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result: result,
            stateList: result.stateList,
            personIndexCounts: result.personIndexCounts
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            errorEncountered: true,
            error
          });
        }
      )
    }

     componentDidMount() {
        this.setState({
            states: this.getListOfStates(this.state.jsonUrl)
        })
    }



  render() {
    return (
    <div className="App">
      <header className="App-header">
      <StateHeader/>
         {this.state.stateList.map((state, i) =>
        <State key={i} number={i} context={this} clickedHandler={this.stateClicked} {...state} />
)}
<div className='personContainer'>
{Object.keys(this.state.personIndexCounts).map((state, i) => {
    var count = this.state.personIndexCounts[state];
    if (count > 0) {
        console.log(this.state.personIndexCounts[state]);
     return (<PersonIndex key={i} letter={state} count={count} />);
} else return null;
    }
    )}
</div>
      </header>
    </div>
  );
  }
}

export default App;
