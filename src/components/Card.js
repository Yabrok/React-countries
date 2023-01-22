import './card.css'

const Card = () => {
  return (
    <li className="card">
      <img className="flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1024px-Flag_of_Germany.svg.png"/>
      <h2 className='card__title'>Germany</h2>
      <p>
        Population: 81,770,900
      </p>
      <p>
        Region: Europe
      </p>
      <p>Capital: Berlin</p>
    </li>
  )
}

export default Card;