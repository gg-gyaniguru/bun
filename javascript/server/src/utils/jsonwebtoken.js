import jwt from 'jsonwebtoken';

const secret = 'secret';

const generateAccessToken = (_id) => {
    return jwt.sign({_id}, secret, {expiresIn: '5m'});
}

const verifyAccessToken = (accessToken) => {
    return jwt.verify(accessToken, secret);
}

export {generateAccessToken, verifyAccessToken};