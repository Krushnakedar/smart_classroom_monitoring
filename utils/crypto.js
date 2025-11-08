const CryptoJS = require("crypto-js");

// Load secret key from .env
const secretKey = process.env.CRYPTO_SECRET_KEY;

// Encrypt a string
const encrypt = (text) => {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
};

// Decrypt a string
const decrypt = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

module.exports = { encrypt, decrypt };
