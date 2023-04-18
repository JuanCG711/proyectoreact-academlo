import './styles/locationInfo.css'

const Locationinfo = ({ location }) => {
  return (
    <article className='location'>
        <h2 className='location_title'>{location?.name}</h2>
        <ul className='location_ul'>
            <li className='location_li'><span className='location_span'>Type: </span>{location?.type}</li>
            <li className='location_li'><span className='location_span'>Dimension: </span>{location?.dimension}</li>
            <li className='location_li'><span className='location_span'>Population: </span>{location?.residents.length}</li>
        </ul>

    </article>
  )
}

export default Locationinfo