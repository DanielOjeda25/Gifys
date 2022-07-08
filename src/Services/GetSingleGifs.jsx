import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = (response) => {
  const { data } = response
  const { images, title, id } = data
  const { url } = images.downsized
  return { title, id, url }
}

export default function getSingleGifs ({ id }) {
  return fetch(`${API_URL}/gifs/${id}?${API_KEY}`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}
