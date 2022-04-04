import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css';


/*ReactDOM.render(
    <GifExpertApp />,
  document.getElementById('root')
);*/
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<GifExpertApp />);

