import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createClient, JitsuProvider } from "@jitsu/react";

const jitsuClient = createClient({
  tracking_host: "http://localhost:8001",
  key: "js.f5lx37q0p8u52ldteg62o9.bp7s0tg3v774loaf99kpdh",
  // See Jitsu SDK parameters section for more options
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JitsuProvider client={jitsuClient}>
      <App />
    </JitsuProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
