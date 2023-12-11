import './App.css';
import Header from './components/Header/Header';
import NiteCity from './components/NiteCity/NiteCity';
import  SECTION from './components/SECTION/SECTION';
import SECTION2 from './components/SECTION2/SECTION2';
import SECTION3 from './components/SECTION3/SECTION3';
import SMALL from './components/SMALL/SMALL';
function App() {
  return (
    <div className="App">
      <Header/>
      <NiteCity/>
      <SECTION/>
      <SECTION2/>
      <SECTION3/>
      <SMALL/>
    </div>
  );
}

export default App;
