import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styling/Button1.css';
import './Styling/Button2.css';
import './Styling/Button3.css';
import './Styling/Button4.css';
import './Styling/IconButton.css';
import './Styling/LoginButton.css';
import './Styling/Advertisement.css';
import './Styling/Background.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
