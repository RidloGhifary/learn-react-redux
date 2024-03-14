import LeftBar from "./components/leftBar/LeftBar";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/signUp/SignUp";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <LeftBar />
        <SignUp />
      </div>
    </>
  );
}

export default App;
