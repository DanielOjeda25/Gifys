import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = (response) => {
  const { data = [] } = response
  if (Array.isArray(data)) {
    // we get the gifs from the api
    const gifs = data.map((image) => {
      const { images, title, id } = image
      const { url } = images.downsized
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getSingleGifs ({ id }) {
  return fetch(`${API_URL}/gifs/${id}?${API_KEY}`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}
