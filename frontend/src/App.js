import styles from "./App.module.css";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className= {styles.App}>
      < NavBar />
      <h1>
        Welcome to Read Rave!
      </h1>
    </div>
  );
}

export default App;