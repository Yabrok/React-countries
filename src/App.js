import React from 'react';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Content from './components/Body/Content'

function App(){
  return(
    <React.Fragment>
      <Header/>
      <Form/>
      <Content/>
    </React.Fragment>
  )
}

export default App;