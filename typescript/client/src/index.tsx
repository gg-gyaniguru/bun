import './index.css'
import {StrictMode as Strict} from 'react'
import {createRoot as create} from 'react-dom/client'
import App from './App.tsx'
import Apollo from '@/providers/Apollo.tsx';
import Query from '@/providers/Query.tsx';
import Store from "@/providers/Store.tsx";

create(document.querySelector('.react')!).render(
    <Strict>
        <Apollo>
            <Query>
                <Store>
                    <App/>
                </Store>
            </Query>
        </Apollo>
    </Strict>
);