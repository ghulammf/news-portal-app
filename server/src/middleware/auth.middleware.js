import jwt from 'jsonwebtoken'

const authMiddleware = async function (req, res, next) {
    try {
        //const token = req.headers.authorization.replace("Bearer ", "");
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                code: 401,
                status: "error",
                message: "Unauthorized"
            });
        } else {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decoded;
            //res.json({ username: decoded.username })
            next();
        }

    } catch (error) {
        res.status(401).json({
            code: 401,
            status: "errorrr",
            message: "Unauthorized"
        });
    }
}

export default authMiddleware;