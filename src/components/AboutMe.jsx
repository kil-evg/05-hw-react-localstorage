import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/constants'
import { isOlderThan30Days } from '../utils/utils';

const AboutMe = () => {
  const [hero, setHero] = useState();

  useEffect(() => {
    const hero_local = localStorage.getItem('hero_local');
    let isActual = false;
    let hero_local_obj = {};

    if (hero_local) {
      hero_local_obj = JSON.parse(hero_local);//преобразовать обратно в объект с помощью метода JSON.parse()
      if (!isOlderThan30Days(hero_local_obj.timestamp)) isActual = true;
    }

    if (isActual) {
      setHero(hero_local_obj)
    }
    else {
      fetch(`${base_url}/v1/peoples/1`)
        .then(response => response.json())
        .then(data => {
          const hero_data = {
            name: data.name,
            gender: data.gender,
            birth_year: data.birth_year,
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color,
            timestamp: new Date()
            //'01-07-24'
          };
          setHero(hero_data);
          localStorage.setItem('hero_local', JSON.stringify(hero_data));//сначала преобразовать объект в строку JSON.stringify()
        }
        )
    }
  }, [])

  return (
    <>
      {(!!hero) &&
        <div className='fs-2 lh-lg text-justify ms-5'>
          <p><span className='display-3'>name:</span> {hero.name}</p>
          <p><span className='display-3'>gender:</span> {hero.gender}</p>
          <p><span className='display-3'>birth year:</span> {hero.birth_year}</p>
          <p><span className='display-3'>height:</span> {hero.height}</p>
          <p><span className='display-3'>mass:</span> {hero.mass}</p>
          <p><span className='display-3'>hair color:</span> {hero.hair_color}</p>
          <p><span className='display-3'>skin color:</span> {hero.skin_color}</p>
          <p><span className='display-3'>eye color:</span> {hero.eye_color}</p>
        </div>
      }
    </>
  )
}

export default AboutMe