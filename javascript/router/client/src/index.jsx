import './index.css'
import {StrictMode as Strict} from 'react'
import {createRoot as create} from 'react-dom/client'
import App from './App.jsx'
import Query from "@/providers/Query.jsx";
import Store from "@/providers/Store.jsx";

create(document.querySelector('.react')).render(
    <Strict>
        <Query>
            <Store>
                <App/>
            </Store>
        </Query>
    </Strict>
);