import React from 'react';

import Content from './components/content/Content';
import SliderButton from './components/slider-button/SliderButton';

import './index.scss';

const App = () => {
  return (
    <div className="App">
      <SliderButton />
      <Content />
    </div>
  );
}

export default App;
