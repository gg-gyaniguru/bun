import {useSelector} from "react-redux";
import Container from "@/components/Container.jsx";
import {useEffect} from "react";
import axios from "@/configurations/axios.js";
import {toast} from "sonner";

const Home = () => {

    const accessToken = useSelector(state => state.accessToken.value);

    // useEffect(() => {
    //     (async () => {
    //         const {data} = await axios.get('');
    //         console.log(data);
    //     })();
    // }, []);

    return (
        <>
            <Container>
                <div className={'mt-6'}>
                    accessToken is {accessToken}
                </div>
                <div className={'mt-6 flex flex-col gap-3'}>
                    <button className={'px-3 py-1.5 bg-neutral-800'}
                            onClick={() => toast.success('success toast')}>success
                    </button>
                    <button className={'px-3 py-1.5 bg-neutral-800'}
                            onClick={() => toast.error('error toast')}>error
                    </button>
                    <button className={'px-3 py-1.5 bg-neutral-800'}
                            onClick={() => toast.info('info toast')}>info
                    </button>
                    <button className={'px-3 py-1.5 bg-neutral-800'}
                            onClick={() => toast.warning('warning toast')}>warning
                    </button>
                </div>
            </Container>
        </>
    );
};

export default Home;