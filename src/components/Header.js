import './header.css'

const Header = () => {
  return (
    <header className="site-header">
      <div className='container'>
        <div className='site-header__inner'>
          <h1>
            Where in the world?
          </h1>
          <p className='darkmode'>Dark mode</p>
        </div>
      </div>
    </header>
  )
}

export default Header;