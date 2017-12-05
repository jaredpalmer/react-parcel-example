import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div>Hello Parcel x React</div>;

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
