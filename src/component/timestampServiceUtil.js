const getTimestamp = async () => {
  const response = await fetch('http://127.0.0.1:5000/api/v1/timestamp', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  });
  return await response.json();

  // // The statement above is same as below using .then chain
  // return fetch('http://127.0.0.1:5000/api/v1/timestamp', {
  //   method: 'GET',
  //   mode: 'cors',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'accept': 'application/json'
  //   }
  // }).then((response) => {
  //   return response.json();
  // }).then((data) => {
  //   return data;
  // });
};

export {
  getTimestamp
};
