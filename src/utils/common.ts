import axios from 'axios';
export const setElectronLocalStorage = () => {
    try {
      let port = Number(document.body.getAttribute('data-port'));
      if (port) {
        //dist url change
        axios
          .post(`http://localhost:${port}/api/setLocalStorage`, {
            // .post(`https://sdcloudstorage.on.fleek.co:${port}/api/setLocalStorage`, {
            localStorage: JSON.stringify(localStorage),
          })
          .then((res: any) => {})
          .catch((error: any) => {});
      }
    } catch (error) {
      console.error('[ error ]-37', error);
    }
  };