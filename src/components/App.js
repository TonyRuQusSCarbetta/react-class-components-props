import React from 'react';
import {MyText, GreetName} from './List'
import '../styles/App.css';

const App = () => {
  return (
    <div>
      <h1>Class Components</h1>
      <MyText/><a href="https://reactjs.org/docs/components-and-props.html">
        Click this link to learn more about Functional Components, Class Components, & passing Props!
      </a>
      <MyText/>

    <h1>Props</h1>
    <p>This class is named GreetName, it passes a Prop as an argument, so all I have to do is type GreetName name=''</p>
    <GreetName name='Tony' />
    <GreetName name='Kingston'/>

    <div />
    </div>

  );
};

export default App;
