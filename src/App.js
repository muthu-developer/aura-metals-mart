import './App.css';
import Shop from "./assets/images/store.png";
import CS from "./assets/images/coming-soon.png"

function App() {
  return (
    <div className="App">
      <div className='home-page'>
        <div className='logo-section'>
          <img src={Shop} alt="Aura Metals Mart" className='logo' />
          <h1>AURA METALS MART</h1>
          <h2>Online Shopping</h2>
          <img src={CS} alt="Coming Soon" className='coming-soon' />
        </div>
      </div>
    </div>
  );
}

export default App;
