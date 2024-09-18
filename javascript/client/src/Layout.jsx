import {Toaster} from 'sonner';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Toaster position={'top-right'} expand={true} richColors={true} duration={1500} gap={16}/>
            <Outlet/>
        </>
    );
};

export default Layout;