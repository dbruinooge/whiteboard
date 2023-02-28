import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LiveMap } from '@liveblocks/client';
import { RoomProvider } from './liveblocks.config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoomProvider 
      id="my-room"
      initialPresence={{}}
      initialStorage={{
        shapes: new LiveMap(),
      }}
    >
      <App />
    </RoomProvider>
  </React.StrictMode>
);

