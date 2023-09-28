import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ReviewCreateForm from "./pages/reviews/ReviewCreateForm";
import ReviewPage from "./pages/reviews/ReviewPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ReviewsPage from "./pages/reviews/ReviewsPage";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className= {styles.App}>
      < NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
              exact
              path="/"
              render={() => (
                <ReviewsPage message="No results found. Adjust the search keyword." />
              )}
            />
          <Route
              exact
              path="/feed"
              render={() => (
                <ReviewsPage
                  message="No results found. Adjust the search keyword or follow a user."
                  filter={`owner__followed__owner__profile=${profile_id}&`}
                />
              )}
            />
            <Route
              exact
              path="/liked"
              render={() => (
                <ReviewsPage
                  message="No results found. Adjust the search keyword or like a review."
                  filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                />
              )}
            />
            <Route exact path="/" component={() => <h1>Home page</h1>} />
            <Route exact path="/signin" component={SignInForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/signout" component={() => <h1>Signout</h1>} />
            <Route exact path="/reviews/create" component={ReviewCreateForm} />
            <Route exact path="/reviews/:id" component={ReviewPage} />
            <Route exact path="/reviews/:id/edit" component={() => <h1>Edit review!</h1>} />
            <Route exact path="/reviews" component={() => <h1>Edit profile</h1>} />
            <Route component={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;