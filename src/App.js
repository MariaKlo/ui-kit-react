import './App.css';
import Buttons from './components/buttons/buttons.js';
import Inputs from './components/inputs/inputs.js';
import RadioButton from './components/radio-buttons/radio-buttons.js';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Buttons/>
        <div className='inputs__wrap'>
          <Inputs text="Please, enter your name and password"/>
          <Inputs text="Please, enter your name and password"/>
          <Inputs text="Please, enter your name and password"/>
        </div>
        <RadioButton/>
      </div>
    </div>
  );
}

export default App;
