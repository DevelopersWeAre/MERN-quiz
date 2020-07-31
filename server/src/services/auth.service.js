const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = process.env.JWT_KEY;

module.exports = {
  authorize: () => {
    return (req, res, next) => {
      const token = req.headers["authorization"];
      if (!token) {
        res.status(401).json({
          status: "no_access",
          statusCode: 401,
          message: "Access Denied",
        });
      } else {
        // Token comes in format 'Bearer token' so we slice it to get tokenBody
        const tokenBody = token.slice(7);
        jwt.verify(tokenBody, secret, (err, decoded) => {
          if (err) {
            res.status(401).json({
              status: "no_access",
              statusCode: 401,
              message: "Access Denied",
            });
          } else {
            // Assign q_auth variable to the req to be used in other middleware-s / controllers
            // q_auth will contain all the information we stored into the token on creation
            req.q_auth = decoded;
            return next();
          }
        });
      }
    };
  },
  createToken({ _id, email }) {
    const payload = { _id, email };
    const token = jwt.sign(payload, secret);
    return token;
  },
};
