import './App.css';
import mock_data from './assets/mock-data.json'
import ProfileCardList from "./components/profile-card/profile-card-list";

function App() {
  return (
    <div className="App">
        <ProfileCardList cards={mock_data}/>
    </div>
  );
}

export default App;
