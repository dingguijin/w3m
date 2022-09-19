import './App.css';

import Main from './components/main'
import Launcher from './components/launcher';
import { StyledFrame } from './StyledFrame';
import { useEffect, useState, useRef } from 'react';


function App() {

  const [open, setOpenState] = useState({ state: null });
  const openRef = useRef();

  useEffect(() => {
    if (!openRef.current) {
      openRef.current = open;
      window.PPMessage = {
        launch: function (state) {
          if (state.button) {
            this.open();
          } else {
            this.close();
          }
        },

        open: function () {
          if (openRef.current.state !== "OPEN") {
            setOpenState({ state: "OPEN" });
          }
        },

        close: function () {
          if (openRef.current.state === "OPEN") {
            setOpenState({ state: "CLOSE" });
          }
        },

        isOpen: function () {
          return openRef.current.state === "OPEN";
        },

        sendMessage: function () {
        }

      };
    } else {
      openRef.current = open;
    }
  }, [open]);


  return (
    <div className='App'>
      <p>Iframes in React</p>
      <StyledFrame className='Fixed-iframe-ppmessage-main'>
        <Main open={open.state} />
      </StyledFrame>
      <StyledFrame className='Fixed-iframe-ppmessage-launcher'>
        <Launcher />
      </StyledFrame>
    </div>
  );
}

export default App;
