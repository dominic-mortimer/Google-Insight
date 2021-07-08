import './App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import MapPage from './pages/MapPage/MapPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <header>Google Navbar will be here</header> */}
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/map" component={MapPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;