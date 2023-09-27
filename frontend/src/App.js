import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  return (
    <div className= {styles.App}>
      < NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
              exact
              path="/"
              render={() => <h1> Home page </h1>}
            />
          <Route
              exact
              path="/signin"
              render={() => <h1> Sign In Page </h1>}
            />
          <Route
              exact
              path="/signup"
              render={() => <SignUpForm/>}
            />
          <Route
              exact
              path="/signout"
              render={() => <h1> Signout </h1>}
            />
          <Route
              exact
              path="/reviews/reviews/create"
              render={() => <h1> Write review !</h1>}
            />
          <Route
              exact
              path="/reviews/:id"
              render={() => <h1> View review details! </h1>}
            />
          <Route
              exact
              path="/reviews/:id/edit"
              render={() => <h1> Edit review! </h1>}
          />
          <Route
              exact
              path="/reviews/profiles/edit"
              render={() => <h1> Edit profile </h1>}
          />
          <Route
              render={() => <p>Page not found!</p>}
            />
          
        </Switch>
      </Container>
    </div>
  );
}

export default App;