import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-responsive-datepicker/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/sass/style.css"
import { Provider } from 'react-redux'
import App from './App'
import store from './redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
