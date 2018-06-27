import React from 'react';
import ReactDOM from 'react-dom';


class Something extends React.Component {
  render() {
// const Something = () => (

    return (
      <div className="Something">Second Component</div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>Hello React!</div>
        <Something />
      </div>
    );
  }
}

//const render = () => ReactDOM.render( <App /> , document.getElementById('root'));
//render();
ReactDOM.render(<App />, document.getElementById('root'));
