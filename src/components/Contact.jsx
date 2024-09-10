import React, { useEffect, useState } from 'react'
import '../Contact.css'
import { base_url } from '../utils/constants'
import { isOlderThan30Days } from '../utils/utils';

const Contact = () => {
  const [planets, setPlanets] = useState({ planets_arr: ['wait...'], timestamp: '' });

  async function fillPlanets() {
    const response = await fetch(`${base_url}/v1/planets`);
    const data = await response.json();
   const planets = data.map(item => item.name);
    // setPlanets(planets);
    return planets;
  }

  useEffect(() => {
    const planets_local = localStorage.getItem('planets_local');
    let isActual = false;
    let planets_local_obj = {};

    if (planets_local) {
      planets_local_obj = JSON.parse(planets_local);//преобразовать в объект с помощью метода JSON.parse(), объект из 2х полей: массив планет и временная метка
      if (!isOlderThan30Days(planets_local_obj.timestamp)) isActual = true;
    }

    if (isActual) {
      setPlanets(planets_local_obj)
    }
    else {
      fillPlanets().then((planets_arr) => {
        const planets_data = {
          planets_arr, // Сохраняем массив планет в поле planets_arr
          timestamp: new Date() // cохраняем временную метку
        };
        setPlanets(planets_data);
        localStorage.setItem('planets_local', JSON.stringify(planets_data)); // Сохраняем в localStorage
      });
    }
}, [])

return (
  <form className='containerContact'>
    <label>First Name
      <input type="text" name="firstname" placeholder="Your name.." />
    </label>

    <label>Last Name
      <input type="text" name="lastname" placeholder="Your last name.." />
    </label>
    <label>Country
      <select name="planet">
         {planets.planets_arr.map(item => <option key={item} value={item}>{item}</option>)} 
      </select>
    </label>

    <label>Subject
      <textarea name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
    </label>
    <button>Submit</button>
  </form>
)
}

export default Contact