const jwt = require("jsonwebtoken");

module.exports = (req, res, next) =>
{
    try
    {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "JWT_SECRET");
        req.userData = { username: decodedToken.username, userId: decodedToken._id}
        next();
    }
    catch(err)
    {
        res.status(401).json({message: "Failed Login"})
    }
};