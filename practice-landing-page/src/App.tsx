import "./App.css";
import Navbar from "./components/navbar";
import GroupOne from "./components/second";
import GroupTwo from "./components/third-section";
import GroupThree from "./components/fourth-section";
import GroupFive from "./components/fifth-section";
import GroupFour from "./components/sixth-section";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <GroupOne />
      <GroupTwo />
      <GroupThree />
      <GroupFive />
      <GroupFour />
      <Footer />
    </div>
  );
}

export default App;
