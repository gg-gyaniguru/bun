import {useSelector} from "react-redux";
import axios from "axios";
// import {useQuery} from "@tanstack/react-query";
import {gql, useQuery} from "@apollo/client";

const Home = () => {

    const accessToken = useSelector(state => state.accessToken.value);

    return (
        <>
            <div className={''}>
                accessToken is {accessToken}
            </div>
        </>
    );
};

export default Home;