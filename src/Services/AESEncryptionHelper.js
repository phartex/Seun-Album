// encryptionHelper.js
import CryptoJS from 'crypto-js';

// Adjust the key length to 32 bytes (256 bits)
export const encryptData = (data, secretKey) => {
  // Ensure the key is exactly 256 bits (32 characters)
  const adjustedKey = CryptoJS.enc.Utf8.parse(secretKey.padEnd(32, '0').slice(0, 32));
  const encrypted = CryptoJS.AES.encrypt(data, adjustedKey).toString();
  return encrypted;
};
