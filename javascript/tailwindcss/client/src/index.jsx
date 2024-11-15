import './index.css'
import {StrictMode as Strict} from 'react'
import {createRoot as create} from 'react-dom/client'
import App from './App.jsx'

create(document.querySelector('.react')).render(
    <Strict>
        <App/>
    </Strict>
);