import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

const sendToAnalytics = (metric) => {
  // Log the metric or send it to an analytics service
  console.log(metric);
};

onLCP(sendToAnalytics);

// Measure CLS (Cumulative Layout Shift)
onCLS(sendToAnalytics);

// Measure FCP (First Contentful Paint)
onFCP(sendToAnalytics);

// Measure FID (First Input Delay)
onFID(sendToAnalytics);

// Measure TTFB (Time to First Byte)
onTTFB(sendToAnalytics);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
