//app.js
import React from 'react';
import './assets/css/App.css';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import Theme from './components/Theme';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Theme />
      </div>
    </Provider>
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

//theme.js
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/ThemeAction';

const Theme = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme)
    const style = {
        width: '100%',
        height: '100vh',
        backgroundColor: theme,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const btn = {
        backgroundColor: 'gray',
        color: 'white',
        padding: '10px',
        cursor: 'pointer',
    }

    return (
        <div style={style} data-testid='theme-container'>
            <button style={{ ...btn, width: '120px' }} onClick={() => dispatch(toggleTheme())}>Theme</button>
        </div>
    )
}

export default Theme;
