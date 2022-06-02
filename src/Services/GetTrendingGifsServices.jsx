import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  return data
}

export default function GetTrendingGifsServices ({ signal }) {
  return fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`, { signal })
    .then(response => response.json())
    .then(fromApiResponseToGifs)
}
