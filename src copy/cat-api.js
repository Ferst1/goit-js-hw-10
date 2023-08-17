import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_Ns8MJAPdlSbske2raA6HrsJqzB8YWgp8l4sD8eztGK72S8RN63w4n1zMGSmXR5c3';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
