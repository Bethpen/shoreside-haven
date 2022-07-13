import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
 
import App from './App';
import { RoomProvider} from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoomProvider>
      <Router>
      <App />
      </Router>
    </RoomProvider>

  </React.StrictMode>
);


