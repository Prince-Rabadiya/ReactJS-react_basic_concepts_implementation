import './App.css';
// import PlainFunClassComponents from './components/plain_comps/PlainFunClassComponents'
// import { PropsDemo } from './components/props/PropsDemo'
// import { StateWithClassComp } from './components/state/StateWithClassComp'
// import { MethodAsPropParent } from './components/props/MethodAsPropParent'
// import { ConditionalRendering } from './components/rendering/ConditionalRendering';
// import { ListRendering } from './components/rendering/ListRendering';
// import { InlineCss, StyleWithModuleCss, StylingWithCss } from './components/styling/StylingWithCss';
// import { Form } from './components/form_handling/Form';
// import { LCA } from './components/life_cycle_methods/LCA'
// import { LCC } from './components/life_cycle_methods/LCC'
// import Parent from './components/pure_component/Parent';
// import RefsDemoParent from './components/refs/RefsDemoParent';
// import ForwardRefParentComp from './components/refs/forwarding_refs/ForwardRefParentComp';
// import ComponentWithError from './components/errror_boundries/ComponentWithError'
// import ErrorBoundryDemo from './components/errror_boundries/ErrorBoundryDemo'
// import HOCChildA from './components/higher_order_components/HOCChildA';
// import HOCChildB from './components/higher_order_components/HOCChildB';
// import RenderPropCounter from './components/rendering_props/RenderPropCounter';
// import RenderPropParent from './components/rendering_props/RenderPropParent';
// import ContextDemo1 from './components/context/ContextDemo1';
// import { UserContextProvider } from './components/context/userContext';


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
      
      {/* <LCA/> // life cycle methods
      <LCC/> */}
      
      {/* <Parent/>  // pure component demo */}
      
      {/* <RefsDemoParent/>
      <ForwardRefParentComp/> // references and forwarding references */}
      
      {/* <ErrorBoundryDemo>
        <ComponentWithError name='prince' />
      </ErrorBoundryDemo>
      <ErrorBoundryDemo>
        <ComponentWithError name='wrong' />
      </ErrorBoundryDemo> */}
      
      {/* <HOCChildA/> // higher order components
      <HOCChildB/> */}

      {/* <RenderPropParent render={(count, incrementCount) => <RenderPropCounter count={count} incrementCount={incrementCount} />} /> */}
      {/* rendering props(can achieve same functionality as HOC) */}

      {/* <UserContextProvider value='new user'> // context(used to pass params directly to the intermediate component in the hierarchy)
        <ContextDemo1/>
      </UserContextProvider> */}
    </div>
  );
}

export default App;
