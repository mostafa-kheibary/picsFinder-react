const getData = async (params,page) => {
  const baseURL = `https://api.unsplash.com/${params}&per_page=25&page=${page}`;
  const respone = await fetch(baseURL, {
    headers: {
      Authorization: 'Client-ID VvnVV700y1rsHEam6V7zrBE4jx-HhoHJDdC3mcIOCFk',
    },
  });
  const data = await respone.json();
  console.log(data);
  return data;
};
export default getData;
