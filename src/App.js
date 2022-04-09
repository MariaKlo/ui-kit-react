import './App.css';
import Buttons from './components/buttons/buttons.js';
import Inputs from './components/inputs/inputs.js';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Buttons/>
        <Inputs text="Please, enter your name and password"/>
      </div>
    </div>
  );
}

export default App;
