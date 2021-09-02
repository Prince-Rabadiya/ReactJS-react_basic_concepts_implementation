import './App.css';
import PlainFunClassComponents from './components/PlainFunClassComponents'
import { PropsDemo } from './components/PropsDemo'
import { StateWithClassComp } from './components/StateWithClassComp'

function App() {
  return (
    <div className="App">
      <PlainFunClassComponents/>
      <PropsDemo name='Prince'> Children prop </PropsDemo>
      <StateWithClassComp/>
    </div>
  );
}

export default App;
