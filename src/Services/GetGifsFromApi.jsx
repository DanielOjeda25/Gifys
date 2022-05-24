import { API_URL, API_KEY } from "./settings";

const getGifsFromApi = (response) => {
  const { data = [] } = response;
  if (Array.isArray(data)) {
    //we get the gifs from the api
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default function GetGifsFromApi() {
  const apiURL = `${API_URL}/gifs/search?${API_KEY}&q=code&limit=5&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(getGifsFromApi);
}
