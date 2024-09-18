import {useSelector} from "react-redux";
import {State} from "../store";

const Home = () => {

    const accessToken = useSelector<State>(state => state.accessToken.value);

    return (
        <>
            <div className={''}>
                {accessToken as string}
            </div>
        </>
    );
};

export default Home;