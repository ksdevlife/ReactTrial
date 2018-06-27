import React from 'react';
import ReactDOM from 'react-dom';

//const App = () => ( 
//<div> Hello React! </div>
//);

class App extends React.Component {
  render() {
    return (
      <div>Hello React!</div>
    );
  }
}

//const render = () => ReactDOM.render( <App /> , document.getElementById('root'));
//render();
ReactDOM.render(<App />, document.getElementById('root'));