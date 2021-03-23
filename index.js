const Jwt = require("./jwt/Jwt");

const payload = {
  id: "9N2mwjXnfdLeNULQPdN7LZgzTgkvTZYCYkDJedzW6k",
  role: "admin",
  name: "ajima chukwuemeka",
  organisation: "youverify"
}

const options = {
  issuer: "Youverify Inc",
  subject: "developer@youverify.co",
  audience: "youverify.co",
  expiresIn: "24h",
  algorithm: "RS256"
}

const verifyOptions = {
  issuer: "Youverify Inc",
  subject: "developer@youverify.co",
  audience: "youverify.co",
  maxAge: "24h",
  algorithm: ["RS256"]
}

const jwtObject = new Jwt(payload, options);
const token = jwtObject.signToken();
console.log(token, "\r\n");

const verifiedToken = jwtObject.verifyToken(token, verifyOptions);
console.log(verifiedToken, "\r\n");

const decodedToken = jwtObject.decodeToken(token);
console.log(decodedToken, "\r\n");