import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Content from './components/Content'

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