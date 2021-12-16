import Popup from "./components/Popup";
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="Main-div">
      <main>
      <h1>Hello, This is Very Friendly Message  </h1>
      <br></br>
      <button className="btn" onClick={() => setButtonPopup(true)}>click the button</button>
      <Popup trigger={buttonPopup}
        setTrigger={setButtonPopup}>
        <h3>
          IT'S TIME
        </h3>
       
      </Popup>
      </main>
    </div>


  );
}

export default App;
