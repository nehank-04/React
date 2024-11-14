//app.js
import React from 'react';
import './assets/css/App.css';
import WithLoading from './components/WithLoading';
import MyComponent from './components/MyComponent';

const WrappedComponentWithLoading = WithLoading(MyComponent);

function App() {

  return (
    <div className="App">
      <h1>Higher-Order Component Example</h1>
      <WrappedComponentWithLoading />
    </div>
  );
}

export default App;

//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

//reportwebvitals.js
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

//
