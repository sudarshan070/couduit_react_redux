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
import { fetchLoggedIn } from './action/action';


class App extends React.Component {

  componentDidMount() {
    if (localStorage.authToken) {

      console.log("componentDidMount")
      this.props.dispatch(fetchLoggedIn("https://conduit.productionready.io/api/user", localStorage.authToken))
    }
  }

  render() {
    return (
      <BrowserRouter>
        < Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter >
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

function mapState(state){
  return {state}
}

export default connect(mapState)(App)
