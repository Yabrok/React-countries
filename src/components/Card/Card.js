import './card.scss'

const Card = ({img, name, population, region, capital}) => {
  // console.log(prop);
  return (
    <li className="card">
      <img className="flag" src={img}/>
      <h2 className='card__title'>{name}</h2>
      <p>
        Population: {population}
      </p>
      <p>
        Region: {region}
      </p>
      <p>Capital: {capital}</p>
    </li>
  )
}

export default Card;