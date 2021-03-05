const fetchResource = url => fetch (url).then (response => response.json ());

export const fetchWeatherAPI = () =>
  fetchResource (
    'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json'
  );

export const fetchUserToken = code => {
  return fetch (`http://localhost:3001/be/login/${code}`, {
    credentials: 'include',
    headers: {
    //   'Access-Control-Allow-Origin': 'http://localhost:3000/',

    },
  }).then (response => {
    return response.json ();
  });
};

export const fetchUserIcon = (name, token) => {
  return fetch (`http://localhost:3001/be/icon`, {
    credentials: 'include',
    // headers: {
    //   Authorization: `Bearer ${token}`,
    //   'Access-Control-Allow-Origin': 'http://localhost:3000/',
      // 'Accept': 'application/json',
    // },
  }).then (response => {
    return response.text ();
  });
};
