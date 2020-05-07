import cryptoJs from "crypto-js";

export function encrypt(ivsRequest, ivsApiKey) {
return cryptoJs.AES.encrypt(JSON.stringify(ivsRequest).trim(), ivsApiKey).toString();
}

export function decrypt(encryptedIvsResponse, ivsApiKey) {
let decryptedJsonString = cryptoJs.AES.decrypt(encryptedIvsResponse, ivsApiKey).toString(cryptoJs.enc.Utf8);
return JSON.parse(decryptedJsonString);
}

