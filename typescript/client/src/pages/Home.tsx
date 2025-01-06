import {useSelector} from 'react-redux';
import {State} from '@/store';
import Container from '@/components/Container.tsx';

const Home = () => {

    const accessToken = useSelector<State>(state => state.accessToken.value);

    return (
        <>
            <Container>
                <div className={'mt-6'}>
                    access token is {accessToken as string}
                </div>
            </Container>
        </>
    );
};

export default Home;