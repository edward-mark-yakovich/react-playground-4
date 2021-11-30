export const isEmptyObj = obj => Object.keys(obj).length === 0;





export const fakeLogin = async ({username, password}) => {
  const loginPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'edward' && password === 'pass') {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });

  return loginPromise;
};