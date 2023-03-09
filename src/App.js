// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Route/Home';
import CoinPage from './Route/CoinPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact render={(props)=><Home/>}/>
        <Route path='/CoinPage/:id'  render={(props)=><CoinPage/>}/>
              </Router>
    </div>
  );
}

export default App;
