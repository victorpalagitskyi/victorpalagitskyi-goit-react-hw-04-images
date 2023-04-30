
import axios from 'axios';
export const getImages = (searchValue, numberOfPage) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchValue}&page=${numberOfPage}&key=35510757-d0f590ce383c890c04ecc88d8&image_type=photo&orientation=horizontal&per_page=12`
  );
};

