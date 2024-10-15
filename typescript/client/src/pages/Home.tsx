import {useSelector} from "react-redux";
import {State} from "../store";

const Home = () => {

    const accessToken = useSelector<State>(state => state.accessToken.value);

    return (
        <>
            <div className={''}>
                access token is {accessToken as string}
            </div>
        </>
    );
};

export default Home;