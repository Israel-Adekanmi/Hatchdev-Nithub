import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyButton } from "./components/button.jsx";
import { WelcomeGreeting } from "./components/welcome.jsx";

function App() {
  const [count, setCount] = useState(0);
  // const [data, fetchData] = useState(null);
  // const [userObject, setUserObject] = useState({ email: "", name: " " });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [toggleVisibility, setToggleVisibility] = useState(true);

  const handleClick = (loginData) => {
    // alert(`${name} Welcome To Nithub React Class`);
    // setUserObject({ ...userObject, name: name }); //spread operator used to update just some the properties not all
    alert(
      `${loginData.email} ${loginData.password} Welcome To Nithub React Class`
    );
  };

  const handleVisibilty = () => {
    var x = document.getElementById("text");
    if (toggleVisibility === true) {
      x.style.display = "none";
      setToggleVisibility(false);
    } else {
      x.style.display = "block";
      setToggleVisibility(true);
    }
  };
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 id="text">Vite + React</h1>

      <div onClick={() => handleVisibilty()}>
        <MyButton textContent="Toogle" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <MyButton textContent="Sign Up" bgColor="green" />
        <MyButton textContent="Sign In" bgColor="red" />
        <div onClick={() => handleClick("Issy, ")}>
          <MyButton textContent="Loading" />
        </div>

        <form action="">
          <input
            type="email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <div onClick={() => handleClick(loginData)}>
            <MyButton textContent="Login" />
          </div>
        </form>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <WelcomeGreeting name="Justice" textColor="blue" level="1" />
        <WelcomeGreeting name="Issy" textColor="red" level="22" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
