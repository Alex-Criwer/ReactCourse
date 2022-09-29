import './App.css';
import mockData from './assets/mock-data.json'
import ProfileCardList from "./components/profile-card/profile-card-list";

function App() {
  return (
    <div className="App">
        <ProfileCardList cards={mockData}/>
    </div>
  );
}

export default App;
