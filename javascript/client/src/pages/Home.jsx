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
            </Container>
        </>
    );
};

export default Home;