import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {ApolloProvider} from "@apollo/client";
import apollo from "./configurations/apollo.ts";
import {QueryClientProvider as QueryProvider} from "@tanstack/react-query";
import query from "./configurations/query.js";
import store from "./store";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={apollo}>
            <QueryProvider client={query}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </QueryProvider>
        </ApolloProvider>
    </StrictMode>
);