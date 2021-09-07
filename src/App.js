import './App.css';
// import PlainFunClassComponents from './components/plain_comps/PlainFunClassComponents'
// import { PropsDemo } from './components/props/PropsDemo'
// import { StateWithClassComp } from './components/state/StateWithClassComp'
// import { MethodAsPropParent } from './components/props/MethodAsPropParent'
// import { ConditionalRendering } from './components/rendering/ConditionalRendering';
// import { ListRendering } from './components/rendering/ListRendering';
// import { InlineCss, StyleWithModuleCss, StylingWithCss } from './components/styling/StylingWithCss';
// import { Form } from './components/form_handling/Form';
import { LCA } from './components/life_cycle_methods/LCA'
import { LCC } from './components/life_cycle_methods/LCC'
import Parent from './components/pure_component/Parent';

function App() {
  return (
    <div className="App">
      {/* <PlainFunClassComponents/>
      <PropsDemo name='Prince'> Children prop </PropsDemo>
      <StateWithClassComp/>
      <MethodAsPropParent/>
      <ConditionalRendering/>
      <ListRendering/>
      <StylingWithCss/>
      <InlineCss/>
      <StyleWithModuleCss/>
      <Form/> */}
      {/* <LCA/>
      <LCC/> */}
      <Parent/>
    </div>
  );
}

export default App;
