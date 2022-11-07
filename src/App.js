import './App.css';
import Shop from "./assets/images/store.png";
import CS from "./assets/images/coming-soon.png"
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='home-page'>
        <div className='logo-section'>
          <img src={Shop} alt="Aura Metals Mart" className='logo' />
          <h1>THE STORE</h1>
          <h6 className='text-light'>AURA METALS MART</h6>
          <h2>Online Shopping</h2>
          <img src={CS} alt="Coming Soon" className='coming-soon' />
        </div>
      </div>
    </div>
  );
}

export default App;
