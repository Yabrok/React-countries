import './content.css'
import Card from './Card'
const Content = () => {
  return (
    <section className='content'>
      <div className='container'>
        <ul className='content__list'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </section>
  )
}

export default Content;