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
import NewPost from './components/NewPost'
import SingleArticle from './components/SingleArticle'
import Setting from './components/Setting'
import Profile from './components/UserProfile'
import { connect } from 'react-redux'
import { fetchLoggedIn } from './action/action';


class App extends React.Component {

  componentDidMount() {
    if (localStorage.authToken) {
      this.props.dispatch(fetchLoggedIn(
        "https://conduit.productionready.io/api/user",
        localStorage.authToken
      ))
    }
  }



  verifyRoutes = () =>
    localStorage.authToken ?
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path="/newPost" component={NewPost} />
        <Route path="/article/:slug" component={SingleArticle} />
        <Route path='/setting' component={Setting} />
        <Route path='/userProfile' component={Profile} />
        <Route component={Error} />
      </Switch> :
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path="/article/:slug" component={SingleArticle} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route component={Error} />
      </Switch>


  render() {
    const { isLoggedIn } = this.props
    return (
      <BrowserRouter>
        {isLoggedIn ? (
          < Header isLoggedIn={isLoggedIn}
          />

        ) : <Header />}

        {this.verifyRoutes()}
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

function mapState(state) {
  return { state }
}

export default connect(mapState)(App)
