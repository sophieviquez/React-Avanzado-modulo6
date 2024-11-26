import { useEffect, useState } from 'react'
import canciones from '@/assets/listaCanciones.json'
import './songlist.css'
const SongList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

// Simulo una llamada a una API
useEffect(() => {
  setTimeout(() => {
    setList(canciones)
    setLoading(false)
  }, 2000)
}, [])

  return (
    <section className='row-container'>
      {
        loading
          ? <h2>Cargando...</h2>
          : list.map((song, index) => (
            <div key={index} className='row-song'>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))
      }
    </section>
  )
}
export default SongList