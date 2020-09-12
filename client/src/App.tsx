import React from 'react';
import Icon from './Icon';
import './App.css';

function App() {
  return (
    <div className="App">
      <Icon 
        id={1}
        name={'el gallo'}
        imgUrl={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F236x%2F93%2F8b%2F9c%2F938b9ccf7ba1ae2a1b6387d0190dc4fd.jpg&f=1&nofb=1'}
      />
    </div>
  );
}

export default App;
