import './content.scss'
import Card from '../Card/Card'
import data from '../../data'

const Content = () => {
  return (
    <section className='content'>
      <div className='container'>
        <ul className='content__list'>
          {
            data.map((item)=>{
              return(
                <Card 
                img={item.img}
                name={item.name}
                population={item.population}
                region={item.region}
                capital={item.capital}
                />
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Content;