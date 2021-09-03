import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import BackdropSpinner from './components/backdrop-spinner/BackdropSpinner';
import Snackbar from './components/snackbar/Snackbar';
import { Home } from './pages/home/Home';
import { PostCreate } from './pages/post-create/PostCreate';
import { PostView } from './pages/post-view/PostView';
import { useGlobalState } from './util/useGlobalState';

function App() {
  const { loading } = useGlobalState()

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Router>
          <div>
            <Switch>
              <Route exact path="/login">
              </Route>
              <Route exact path="/create-post">
                <PostCreate />
              </Route>
              <Route exact path="/view/:id">
                <PostView />
              </Route>
              <Route exact path="/search">
                <Home />
              </Route>
              <Route path="/">
                <Redirect
                  to={{
                    pathname: "/search",
                  }}
                />
              </Route>
            </Switch>
            <Snackbar />
            <BackdropSpinner open={loading.get()}/>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;
