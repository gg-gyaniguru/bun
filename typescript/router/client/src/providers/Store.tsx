import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import store from '@/store';

interface Store {
    children: ReactNode;
}

const Store = ({children}:Store) => {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    );
};

export default Store;