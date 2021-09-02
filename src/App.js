import './App.css';
import PlainFunClassComponents from './components/PlainFunClassComponents'
import { PropsDemo } from './components/PropsDemo'

function App() {
  return (
    <div className="App">
      <PlainFunClassComponents/>
      <PropsDemo name='Prince'/>
    </div>
  );
}

export default App;
