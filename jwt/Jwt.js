const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

/**
 * class Jwt
 * @method signToken
 * @method verifiedToken
 * @method decodeToken
 * @method getKey
 */
class Jwt {
  constructor(payload, options) {
    this.payload = payload;
    this.options = options;
  }

  /**
   * a method for signing a given jwt payload using the private key
   * @returns { string } token
   */
  signToken() {
    return jwt.sign(this.payload, this.getKey("private.key"), this.options);
  }

  /**
   * verify a given claim/token given using the provided public key
   * @param {string} token
   * @param {object} options
   * @returns {object} error | error
   */
  verifyToken(token, options) {
    try {
      return jwt.verify(token, this.getKey("public.key"), options);
    } catch (error) {
      throw error;
    }
  }

  /**
   * decode the provided token
   * @param {string} token 
   * @returns {object} decoded token object
   */
  decodeToken(token) {
    return jwt.decode(token, { complete: true });
  }

  /**
   * get the plain text string of the provided key
   * @param {string} key 
   * @returns {string} key string
   */
  getKey(key) {
    return fs.readFileSync(path.join(__dirname, "..", "keys", key), "utf-8");
  }
}

module.exports = Jwt;
