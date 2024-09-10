import React from 'react'
import { starWarsInfo } from '../utils/constants'

const StarWars = () => {
  return (
    <div className="fs-2 lh-lg text-justify">{starWarsInfo}</div>
  )
}

export default StarWars