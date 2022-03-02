const getRandom = async (count) => {
  const baseURL = `https://api.unsplash.com/photos/random?count=${count}`;
  const respone = await fetch(baseURL, {
    headers: {
      Authorization: 'Client-ID VvnVV700y1rsHEam6V7zrBE4jx-HhoHJDdC3mcIOCFk',
    },
  });
  const data = await respone.json();
  return data;
};
export default getRandom;
