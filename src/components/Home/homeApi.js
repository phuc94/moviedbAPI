export const fetchAllAPI = async (page) => {
  const url = `https://api.themoviedb.org/4/list/1?page=${page}&api_key=bd0830ad7ef334b313907c035d767bd1`;

  const res = await fetch(url).then((response) => response.json());

  return res;
};
