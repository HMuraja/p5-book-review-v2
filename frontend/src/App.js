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
import ReviewEditForm from "./pages/reviews/ReviewEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";

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
            <Route exact path="/reviews/:id/edit" component={ReviewEditForm} />
            <Route exact path="/reviews" component={() => <h1>Edit profile</h1>} />
            <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
            <Route
              exact
              path="/profiles/:id/edit/username"
              render={() => <UsernameForm />}
            />
            <Route
              exact
              path="/profiles/:id/edit/password"
              render={() => <UserPasswordForm/>}
            />
            <Route
              exact
              path="/profiles/:id/edit"
              render={() => <ProfileEditForm />}
            />
            <Route component={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;