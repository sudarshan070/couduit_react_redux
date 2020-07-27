import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Hero from './components/Hero'
import Header from './components/Header'
import Error from './components/Error'
import Register from './components/Register'
import Login from './components/Login'
import Tags from './components/Tags'
import Article from './components/Article'
import { connect } from 'react-redux'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }


  render() {
    return (
      <BrowserRouter>
        < Header />
        <Switch>
          <Route component={HomePage} path='/' exact />
          <Route component={Register} path='/register' />
          <Route component={Login} path='/login' />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

const HomePage = () => (<>
  <Hero />
  <div className='container'>
    <div className='flex'>
      <Article />
      <Tags />
    </div>
  </div>
</>
)


export default connect()(App)
