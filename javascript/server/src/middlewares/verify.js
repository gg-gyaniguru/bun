import {verifyAccessToken} from "../utils/jsonwebtoken.js";

const verify = (request, response, next) => {
    try {
        let accessToken = request.header('Authorization');
        if (!accessToken) {
            return response.status(401).json({message: 'access denied'});
        }
        if (!accessToken.startsWith('Bearer ')) {
            return response.status(400).json({message: 'access denied'});
        }
        accessToken = accessToken.replace('Bearer ', '');
        const decode = verifyAccessToken(accessToken);
        request._id = decode._id;
        next();
    } catch (error) {
        return response.status(401).json({message: 'access denied'});
    }
}

export default verify;