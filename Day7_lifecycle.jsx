//app.js
import React from 'react';
import './assets/css/App.css';
import Lifecycle from './components/LifeCycle';

function App() {

  return (
    <div className="App">
      <Lifecycle />
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

//Lifecycle.jsx
import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, React!',
        };
        console.log('Constructor called');
    }

    componentDidMount() {
        console.log('ComponentDidMount called');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ComponentDidUpdate called');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount called');
    }

    handleClick = () => {
        this.setState({ message: 'Updated message!' });
    };

    render() {
        console.log('Render called');
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.handleClick}>Update Message</button>
            </div>
        );
    }
}

export default Lifecycle;
