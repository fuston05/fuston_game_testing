import React from 'react';

import Particles from 'react-particles-js';

//components
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Main />

      <Particles
        params={{
          "particles": {
            "line_linked": {
              'enable': false
            },
            "shape": {
              "type": "polygon",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "color": {
              "value": "#6dff45"
            },
            
            "number": {
              "value": 80,
              'density': {
                'enable': false
              }
            },
            "size": {
              "value": 3,
              'random': true,
              'anim': {
                'speed': 1,
                'size_min': 0.1
              }
            }
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
              "enable": true,
              "rotateX": 600,
              "rotateY": 1200
            }
          },
        }}
        style={{
          zIndex: -1,
          width: '100%',
          height: '100%',
          background: 'black',
          position: 'fixed',
          top: 0,
          left: 0
        }}
      />

    </div>
  );
}//end App

export default App;
