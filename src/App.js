import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Navigationbar'
import QuickQuotes from './Components/QuickQuotes'
import Background from './Components/Background'
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <NavigationBar />
      <Route exact path='/' component={Background}/>
      <Route  path='/quickquotes' component={QuickQuotes}/>
    </Router>
    </>
  );
}

export default App;
