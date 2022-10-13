import './App.css';
import articles from './assets/articles.json'
import ProfileCardList from "./components/profile-card/profile-card-list";

function App() {
  return (
    <div className="App">
        <ProfileCardList cards={articles}/>
    </div>
  );
}

export default App;
