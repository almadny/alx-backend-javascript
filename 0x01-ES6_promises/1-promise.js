export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      return resolve({ status: 200, body: 'Success' });
    }
    return reject(new Error('The fake API is not working currently'));
  });
  return myPromise;
}