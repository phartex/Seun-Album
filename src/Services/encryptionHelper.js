import JSEncrypt from 'jsencrypt';

/**
 * The hardcoded RSA public key for encryption.
 */
const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEA6+97dNB82DeZ+XFXpn8toRF24tFi0jsgjzyA7YZP2h2XkKzqrONX
9r5b/dwnKxf11D7tqC0kjLXH1Pmgjqyc8nR2mxRJn8ftxEwF1NIHsMW7yZLv+Lav
5dHZemLPJfJtYXIbTRERhPImm47OH5g0ivG5BunZjwh/tIwJBGTPfyaJTFS1andi
9HxOQKgRgbLJjasVm+YX69gOGIJXAhz58xb7arZLDPHEmGOq5pxv1RzJ7IxgV+1J
ICoqljE/k0epIlXxgSIFlLE2P8jZcP6qDaqWslJo2fVWGVusZcAPdHsk2v0/Uz/k
Cg3NxJZqYX+0TA2JfQCamXfCvLb0QNJ47QIDAQAB
-----END RSA PUBLIC KEY-----`;

/**
 * Encrypts a message using the RSA public key.
 * @param {string} msg - The message to be encrypted.
 * @returns {string|null} - The encrypted message in Base64 format, or null if encryption fails.
 */
export const encryptData2 = (msg) => {
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey(publicKey); // Set the public key

    const encrypted = jsEncrypt.encrypt(msg); // Encrypt the message

    if (!encrypted) {
        console.error('Encryption failed');
        return null;
    }

    return encrypted; // Return the encrypted message (Base64-encoded)
};
