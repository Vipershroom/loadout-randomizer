import "./styles/App.scss";
import Banner from "../assets/banner.jpg";

function App() {
  return (
    <main className="main">
      <div className="banner">
        <img src={Banner} alt="" />
      </div>
    </main>
  );
}

export default App;
