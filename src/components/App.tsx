import "./styles/App.scss";

import Nav from "./Nav";
import Banner from "./Banner";
import Loadout from "./Loadout";

function App() {
  return (
    <main>
      <div className="header">
        <Nav />
        <Banner />
      </div>
      <div className="main">
        <Loadout />
      </div>
    </main>
  );
}

export default App;
