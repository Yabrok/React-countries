import './form.scss'

const Form = () => {
  return (
    <section className="hero">
      <div className="container">
        <form className="hero__form">
          <input className='hero__input' type="text" placeholder="Search country..." />
          <select className='hero__select'>
            <option selected disabled>Choose region</option>
          </select>
        </form>
      </div>
    </section>
  )
}
export default Form;