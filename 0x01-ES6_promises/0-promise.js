export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    const x = 5;
    if (x > 3) {
      resolve('This is OK');
    } else {
      reject(new Error('Not OK'));
    }
  });
  return myPromise;
}
