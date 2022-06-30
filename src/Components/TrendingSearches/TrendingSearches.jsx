import React, { useState, useEffect } from 'react'
import getTrendingGifsServices from '../../Services/GetTrendingGifsServices'
import Category from '../CategoryComponent/index'

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    getTrendingGifsServices({ signal: controller.signal })
      .then(setTrends)
      .catch(error => console.log(error))

    return () => controller.abort()
  }, [])

  return <Category name='Trends' options={trends}/>
}
