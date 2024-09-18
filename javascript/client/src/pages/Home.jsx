import {useState} from "react";
import {useSelector} from "react-redux";

const Home = () => {

    const accessToken = useSelector(state => state.accessToken.value);

    return (
        <>
            <div className={''}>
                accessToken  {accessToken}
            </div>
        </>
    );
};

export default Home;