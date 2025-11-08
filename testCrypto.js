const { encrypt, decrypt } = require("./utils/crypto");

const secretKey = "my-secret-key"; // ideally store in environment variable

let message = "Hello World!";
const encrypted = encrypt(message, secretKey);
console.log("Encrypted:", encrypted);

const decrypted = decrypt(encrypted, secretKey);
console.log("Decrypted:", decrypted);
