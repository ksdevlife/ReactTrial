import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';

class Something extends React.Component {
  render() {
    return (
      <div className="Something" style={{color: 'red'}}>Second Component</div>
    );
  }
}

// css: margin-left
const styleOfThird = {marginLeft: '100px'};

class Third extends React.Component {
  render() {
    return (

      <div className="Third" style={styleOfThird}>Third Component</div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>Hello React!</div>
        <Something />
        <Third />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
