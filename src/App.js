import './App.css';
import PlainFunClassComponents from './components/plain_comps/PlainFunClassComponents'
import { PropsDemo } from './components/props/PropsDemo'
import { StateWithClassComp } from './components/state/StateWithClassComp'
import { MethodAsPropParent } from './components/props/MethodAsPropParent'
import { ConditionalRendering } from './components/rendering/ConditionalRendering';

function App() {
  return (
    <div className="App">
      <PlainFunClassComponents/>
      <PropsDemo name='Prince'> Children prop </PropsDemo>
      <StateWithClassComp/>
      <MethodAsPropParent/>
      <ConditionalRendering/>
    </div>
  );
}

export default App;
