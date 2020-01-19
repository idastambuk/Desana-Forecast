import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {HomePageContainer} from "./pages/home-page/home-page.component";
import {FiveDayPageContainer} from "./pages/five-day-page/five-day-page.component";
import {store} from "./store";
import {Provider} from "react-redux"

const DEFAULT = '/';
const FIVEDAY = '/5-day-forecast/';

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={DEFAULT} exact={true} component={HomePageContainer}/>
            <Route path={FIVEDAY} component={FiveDayPageContainer}/>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
