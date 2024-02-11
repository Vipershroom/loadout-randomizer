import "./styles/App.scss";
import Banner from "../assets/banner.jpg";
import Nav from "./Nav";

function App() {
  return (
    <main className="main">
      <Nav />
      <div className="banner">
        <img src={Banner} alt="" />
      </div>
    </main>
  );
}

export default App;
