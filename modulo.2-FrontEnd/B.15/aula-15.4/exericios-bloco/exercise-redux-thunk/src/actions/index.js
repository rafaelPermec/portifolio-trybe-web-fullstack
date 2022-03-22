export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  const url = 'https://aws.random.cat/meow';
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch(url)
    .then((response) => response.json())
    .then((state) => dispatch(getPicture(state)))
  }
}
