import CryptoJS from 'crypto-js';

const secretKey = CryptoJS.enc.Utf8.parse('12345678900000001234567890000000'); // 32 bytes for AES-256

const encryptData = (text, key) => {
  const iv = CryptoJS.enc.Utf8.parse(1234567890000000);
  const encryptedData = CryptoJS.AES.encrypt(text, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC, // Default mode is CBC, explicitly stated for clarity
    padding: CryptoJS.pad.Pkcs7, // Default padding is PKCS7, explicitly stated
  }).toString();
  
  return {
    encryptedData,
    iv: iv.toString(CryptoJS.enc.Hex), // Return IV in a format that can be reused
  };
};

export { encryptData, secretKey };
