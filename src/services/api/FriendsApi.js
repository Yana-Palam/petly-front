import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://petly-back.onrender.com/api',
});

export const getFriends = async () => {
  const { data } = await instance.get('/friends');
  return data;
};

export const getAdInfo = id => {
  return axios.get(`/notices/${id}`).then(response => {
    return response.data.data;
  });
};
