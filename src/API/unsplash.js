const getData = async (params, page) => {
  const baseURL = `https://api.unsplash.com${params}`;
  const respone = await fetch(baseURL, {
    headers: {
      Authorization: 'Client-ID VvnVV700y1rsHEam6V7zrBE4jx-HhoHJDdC3mcIOCFk',
    },
  });
  return await respone.json();
};
export default getData;
