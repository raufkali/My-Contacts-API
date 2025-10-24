const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let autheader = req.headers.authorization;
  if (autheader && autheader.startsWith("Bearer")) {
    token = autheader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        const err = new Error("[-] User is un-authorized!");
        err.status = 401;
        return next(err);
      }
      req.user = decoded.user;
      next();
    });
  } else {
    const err = new Error("[-] missing authtoken");
    err.status = 401;
    return next(err);
  }
});

module.exports = validateToken;
