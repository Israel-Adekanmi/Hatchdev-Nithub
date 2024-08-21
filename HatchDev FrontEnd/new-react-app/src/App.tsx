import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Israel");
  const [mirror, setMirror] = useState('')
  const [password, setPassWord] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const showPassWord = () => {
    const data = document.getElementById("one") as HTMLInputElement;
    if (data) {
      if (password) {
        data.type = "password";
        setPassWord(false);
      } else {
        data.type = "text";
        setPassWord(true);
      }
    }
  };
  return (
    <>
      <div>Hello {name}</div>
      <p>Counter: {count} </p>

      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>

      <div>
        <input type='text' onChange={(e) => setMirror({e.target.value})}/>
      </div>
      <div>
        <input id="one" type="password" />
        <button onClick={showPassWord} style={{backgroundColor: 'blue', color: 'white'}}>Toggle Password</button>
      </div>
    </>
  );
}

export default App;
