import {connect} from 'mongoose';

const connection = async () => {
    try {
        await connect('mongodb://localhost:27017/dummy-api');
        console.log('connect to database');
    }catch (error) {
        throw new Error('error in connecting to database')
    }
}

export default connection;