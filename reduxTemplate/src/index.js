import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.scss';

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

console.log(pathConstants.COMPONENTS);

ReactDOM.render(<App />, document.querySelector('main'));
