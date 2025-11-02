import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components/App/App';
import './common.css';

// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);