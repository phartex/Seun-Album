import JSEncrypt from 'jsencrypt';

/**
 * The hardcoded RSA public key for encryption.
 */
const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAuo7DxSmerTLgKivOrNZBq+hDIJEAYWwG8fofvSAXN5KJ4kjGWKdpppL/WmIDwYIeYS635dRtaKggEWF83w9fL0R2nEi6voJAgTfMoQVe9rWqsuvjvS/ovCUJGJr0CTHT1Ri0UtMrDIgUb3Qvlrn6nRDrspQ78+fa+H4YQ7JQonc/2PnHZFVV41Sqzfsx7nfS9jUgwRpmIMwBJmIxUHQwmzOgkScU6LwU5qle+WLn5te1BcFNls6sT7XslYPE7v8MxzgYOopcE1klQg4wCVzX/9R0JCFNmO5xr2fcqT+t8Kclj5iUo0rwSHz2oVEsikllI/+CwiTe/fRc9urVYR1eCQIDAQAB
-----END RSA PUBLIC KEY-----`;


/**
 * Encrypts a message using the RSA public key.
 * @param {string} msg - The message to be encrypted.
 * @returns {string|null} - The encrypted message in Base64 format, or null if encryption fails.
 */
export const encryptData = (msg) => {
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey(publicKey); // Set the public key

    const encrypted = jsEncrypt.encrypt(msg); // Encrypt the message

    if (!encrypted) {
        console.error('Encryption failed');
        return null;
    }

    return encrypted; // Return the encrypted message (Base64-encoded)
};
