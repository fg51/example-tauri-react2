import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World with React</h1>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
