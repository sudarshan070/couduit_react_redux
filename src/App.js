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


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  updateLoggedIn = (status) => {
    this.setState({ isLoggedIn: status })
  }

  render() {
    let { isLoggedIn } = this.state
    return (
      <BrowserRouter>
        < Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Route component={HomePage} path='/' exact />
          <Route component={Register} path='/register' />
          <Route render={() => <Login updateLoggedIn={this.updateLoggedIn} />} path='/login' />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}


const HomePage = () => (<><Hero /> <Article /> <Tags /></>)



