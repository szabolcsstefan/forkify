import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const data = await Promise.race([url, timeout(TIMEOUT_SEC)]);
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const data = await Promise.race([url, timeout(TIMEOUT_SEC)]);
    return data;
  } catch (err) {
    throw err;
  }
};
